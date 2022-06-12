import React from 'react'
import Resizable from './Resizable'
import useResizable from './useResizable'

export default Resizable
export { useResizable }

//
// Types
//
export type SplitterProps = React.HTMLProps<HTMLDivElement>

export type Resizable = {
  /**
   * border position
   */
  position: number
  /**
   * whether the border is dragging
   */
  isDragging: boolean
  /**
   * props for drag bar
   */
  splitterProps: SplitterProps
}

export type UseResizableProps = {
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
   * resizing step with keyboard
   */
  step?: number
  shiftStep?: number
  /**
   * callback when border position changes start
   */
  onResizeStart?: () => void
  /**
   * callback when border position changes end
   */
  onResizeEnd?: () => void
}

export type ResizableProps = UseResizableProps & {
  /**
   * callback children
   */
  children: (props: Resizable) => JSX.Element
}
