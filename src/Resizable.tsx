import useResizable from './useResizable'
import type { ResizableProps } from './index'

const Resizable = ({
  axis,
  initial = 0,
  min = 0,
  max = Infinity,
  reverse,
  onResizeStart,
  onResizeEnd,
  children,
}: ResizableProps): JSX.Element => {
  const { position, dragBarProps } = useResizable({
    axis,
    initial,
    min,
    max,
    reverse,
    onResizeStart,
    onResizeEnd,
  })

  return children({
    position,
    dragBarProps,
  })
}

export default Resizable
