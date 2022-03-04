import React from 'react'
import Resizable from './Resizable'

import useResizable from './useResizable'

export default Resizable

export { useResizable }

export interface UseResizable {
  /**
   * border position
   */
  position: number
  /**
   * props for drag bar
   */
  dragBarProps: React.HTMLProps<HTMLDivElement>
}

export interface UseResizableProps {
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

export interface ResizableProps extends UseResizableProps {
  /**
   * callback children
   */
  children: (props: UseResizable) => JSX.Element
}
