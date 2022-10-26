import type React from 'react';
import { useCallback, useRef, useState } from 'react';

import { KEYS_AXIS_X, KEYS_AXIS_Y, KEYS_POSITIVE } from './constants';

import type { Resizable, UseResizableProps } from './types';

const useResizable = ({
  axis,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  step = 10,
  shiftStep = 50,
  onResizeStart,
  onResizeEnd,
}: UseResizableProps): Resizable => {
  const isResizing = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(Math.min(Math.max(initial, min), max));

  const handleMousemove = useCallback(
    (e: MouseEvent) => {
      // exit if not resizing
      if (!isResizing.current) return;

      e.stopPropagation();
      e.preventDefault(); // prevent text selection

      const currentPosition = (() => {
        if (axis === 'x') {
          return reverse ? document.body.offsetWidth - e.clientX : e.clientX;
        }
        return reverse ? document.body.offsetHeight - e.clientY : e.clientY;
      })();

      if (min < currentPosition && currentPosition < max) {
        setPosition(currentPosition);
      }
    },
    [axis, max, min, reverse],
  );

  const handleMouseup = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      isResizing.current = false;
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('mouseup', handleMouseup);
      if (onResizeEnd) onResizeEnd();
    },
    [handleMousemove, onResizeEnd],
  );

  const handleMousedown = useCallback<React.MouseEventHandler>(
    (e) => {
      e.stopPropagation();
      isResizing.current = true;
      setIsDragging(true);
      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('mouseup', handleMouseup);
      if (onResizeStart) onResizeStart();
    },
    [handleMousemove, handleMouseup, onResizeStart],
  );

  const handleKeyDown = useCallback<React.KeyboardEventHandler>(
    (e) => {
      if (e.key === 'Enter') {
        setPosition(initial);
        return;
      }
      if (
        (axis === 'x' && !KEYS_AXIS_X.includes(e.key)) ||
        (axis === 'y' && !KEYS_AXIS_Y.includes(e.key))
      ) {
        return;
      }

      if (onResizeStart) onResizeStart();

      const changeStep = e.shiftKey ? shiftStep : step;
      const reversed = reverse ? -1 : 1;
      const dir = KEYS_POSITIVE.includes(e.key) ? reversed : -1 * reversed;

      const newPosition = position + changeStep * dir;
      if (newPosition < min) {
        setPosition(min);
      } else if (newPosition > max) {
        setPosition(max);
      } else {
        setPosition(newPosition);
      }

      if (onResizeEnd) onResizeEnd();
    },
    [axis, onResizeStart, shiftStep, step, reverse, position, min, max, onResizeEnd, initial],
  );

  return {
    position,
    isDragging,
    splitterProps: {
      onMouseDown: handleMousedown,
      onKeyDown: handleKeyDown,
    },
  };
};

export default useResizable;
