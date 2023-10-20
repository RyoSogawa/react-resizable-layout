import type React from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { KEYS_AXIS_X, KEYS_AXIS_Y, KEYS_POSITIVE } from './constants';

import type { Resizable, SeparatorProps, UseResizableProps } from './types';

const useResizable = ({
  axis,
  disabled = false,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  step = 10,
  shiftStep = 50,
  onResizeStart,
  onResizeEnd,
  containerRef,
}: UseResizableProps): Resizable => {
  const initialPosition = Math.min(Math.max(initial, min), max);
  const isResizing = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const positionRef = useRef(initialPosition);
  const [endPosition, setEndPosition] = useState(initialPosition);

  const ariaProps = useMemo<SeparatorProps>(
    () => ({
      role: 'separator',
      'aria-valuenow': position,
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-orientation': axis === 'x' ? 'vertical' : 'horizontal',
      'aria-disabled': disabled,
    }),
    [axis, disabled, max, min, position],
  );

  const handlePointermove = useCallback(
    (e: PointerEvent) => {
      // exit if not resizing
      if (!isResizing.current) return;

      if (disabled) return;

      e.stopPropagation();
      e.preventDefault(); // prevent text selection

      const currentPosition = (() => {
        if (axis === 'x') {
          if (containerRef?.current) {
            const containerNode = containerRef.current;
            const { left, width } = containerNode.getBoundingClientRect();
            return reverse ? left + width - e.clientX : e.clientX - left;
          }
          return reverse ? document.body.offsetWidth - e.clientX : e.clientX;
        }
        if (containerRef?.current) {
          const containerNode = containerRef.current;
          const { top, height } = containerNode.getBoundingClientRect();
          return reverse ? top + height - e.clientY : e.clientY - top;
        }
        return reverse ? document.body.offsetHeight - e.clientY : e.clientY;
      })();

      currentPosition = Math.min(Math.max(currentPosition, min), max);
      setPosition(currentPosition);
      positionRef.current = currentPosition;
    },
    [axis, disabled, max, min, reverse, containerRef],
  );

  const handlePointerup = useCallback(
    (e: PointerEvent) => {
      if (disabled) return;

      e.stopPropagation();
      isResizing.current = false;
      setIsDragging(false);
      setEndPosition(positionRef.current);
      document.removeEventListener('pointermove', handlePointermove);
      document.removeEventListener('pointerup', handlePointerup);
      if (onResizeEnd) onResizeEnd({ position: positionRef.current });
    },
    [disabled, handlePointermove, onResizeEnd],
  );

  const handlePointerdown = useCallback<React.PointerEventHandler>(
    (e) => {
      if (disabled) return;

      e.stopPropagation();
      isResizing.current = true;
      setIsDragging(true);
      document.addEventListener('pointermove', handlePointermove);
      document.addEventListener('pointerup', handlePointerup);
      if (onResizeStart) onResizeStart({ position: positionRef.current });
    },
    [disabled, handlePointermove, handlePointerup, onResizeStart],
  );

  const handleKeyDown = useCallback<React.KeyboardEventHandler>(
    (e) => {
      if (disabled) return;

      if (e.key === 'Enter') {
        setPosition(initial);
        positionRef.current = initial;
        return;
      }
      if (
        (axis === 'x' && !KEYS_AXIS_X.includes(e.key)) ||
        (axis === 'y' && !KEYS_AXIS_Y.includes(e.key))
      ) {
        return;
      }

      if (onResizeStart) onResizeStart({ position: positionRef.current });

      const changeStep = e.shiftKey ? shiftStep : step;
      const reversed = reverse ? -1 : 1;
      const dir = KEYS_POSITIVE.includes(e.key) ? reversed : -1 * reversed;

      const newPosition = position + changeStep * dir;
      if (newPosition < min) {
        setPosition(min);
        positionRef.current = min;
      } else if (newPosition > max) {
        setPosition(max);
        positionRef.current = max;
      } else {
        setPosition(newPosition);
        positionRef.current = newPosition;
      }

      if (onResizeEnd) onResizeEnd({ position: positionRef.current });
    },
    // prettier-ignore
    [disabled, axis, onResizeStart, shiftStep, step, reverse, position, min, max, onResizeEnd, initial],
  );

  const handleDoubleClick = useCallback<React.MouseEventHandler>(() => {
    if (disabled) return;
    setPosition(initial);
    positionRef.current = initial;
  }, [disabled, initial]);

  return {
    position,
    endPosition,
    isDragging,
    separatorProps: {
      ...ariaProps,
      onPointerDown: handlePointerdown,
      onKeyDown: handleKeyDown,
      onDoubleClick: handleDoubleClick,
    },
    setPosition,
    // deprecated. next version will remove this.
    splitterProps: {
      ...ariaProps,
      onPointerDown: handlePointerdown,
      onKeyDown: handleKeyDown,
      onDoubleClick: handleDoubleClick,
    },
  };
};

export default useResizable;
