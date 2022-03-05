import React from 'react'
import Resizable from './Resizable'

import useResizable from './useResizable'

export default Resizable

export { useResizable }

export type DragBarProps = React.HTMLProps<HTMLDivElement>

export type Resizable = {
  /**
   * border position
   */
  position: number
  /**
   * props for drag bar
   */
  dragBarProps: DragBarProps
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
   * callback when border position changes start
   */
  onResizeStart?: (position: number) => void
  /**
   * callback when border position changes end
   */
  onResizeEnd?: (position: number) => void
}

export type ResizableProps = UseResizableProps & {
  /**
   * callback children
   */
  children: (props: Resizable) => JSX.Element
}
