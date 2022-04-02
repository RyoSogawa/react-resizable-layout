import React from 'react'
import { cn } from '../utils/cn'

const SampleSplitter = ({
  id = 'drag-bar',
  dir,
  isDragging,
  ...props
}: any) => {
  return (
    <div
      id={id}
      data-testid={id}
      className={cn(
        'sample-drag-bar',
        dir === 'horizontal' && 'sample-drag-bar--horizontal',
        isDragging && 'sample-drag-bar--dragging'
      )}
      {...props}
    />
  )
}

export default SampleSplitter
