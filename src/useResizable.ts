import { useCallback, useRef, useState } from 'react'
import type { Resizable, UseResizableProps } from './index'

const useResizable = ({
  axis,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  onResizeStart,
  onResizeEnd,
}: UseResizableProps): Resizable => {
  const isResizing = useRef(false)
  const [position, setPosition] = useState(Math.max(initial, min))

  const handleMousemove = useCallback(e => {
    // exit if not resizing
    if (!isResizing.current) return

    e.stopPropagation()
    e.preventDefault() // prevent text selection

    const currentPosition = !reverse
      ? axis === 'x'
        ? e.clientX
        : e.clientY
      : axis === 'x'
      ? document.body.offsetWidth - e.clientX
      : document.body.offsetHeight - e.clientY

    if (min < currentPosition && currentPosition < max) {
      setPosition(currentPosition)
    }
  }, [])

  const handleMousedown = useCallback(e => {
    e.stopPropagation()
    isResizing.current = true
    document.addEventListener('mousemove', handleMousemove)
    document.addEventListener('mouseup', handleMouseup)
    onResizeStart && onResizeStart(position)
  }, [])

  const handleMouseup = useCallback(e => {
    e.stopPropagation()
    isResizing.current = false
    document.removeEventListener('mousemove', handleMousemove)
    document.removeEventListener('mouseup', handleMouseup)
    onResizeEnd && onResizeEnd(position)
  }, [])

  return {
    position,
    dragBarProps: { onMouseDown: handleMousedown },
  }
}

export default useResizable
