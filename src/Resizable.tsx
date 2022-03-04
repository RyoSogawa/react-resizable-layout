import React, { useCallback, useRef, useState } from 'react'

export interface ResizableChildrenProps {
  /**
   * border position
   */
  position: number
  /**
   * props for drag bar
   */
  dragBarProps: React.HTMLProps<HTMLDivElement>
}

export interface ResizableProps {
  /**
   * direction of resizing
   */
  axis: 'x' | 'y'
  /**
   * initial border position
   */
  initial?: number
  /**
   * minimum border position
   */
  min?: number
  /**
   * maximum border position
   */
  max?: number
  /**
   * calculate border position from other side
   */
  reverse?: boolean
  /**
   * callback children
   * @param {ResizableChildrenProps} props
   */
  children: (props: ResizableChildrenProps) => JSX.Element
}

const Resizable = ({
  axis,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  children,
}: ResizableProps): JSX.Element => {
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
  }, [])

  const handleMouseup = useCallback(e => {
    e.stopPropagation()
    isResizing.current = false
    document.removeEventListener('mousemove', handleMousemove)
    document.removeEventListener('mouseup', handleMouseup)
  }, [])

  return children({
    position,
    dragBarProps: { onMouseDown: handleMousedown },
  })
}

export default Resizable
