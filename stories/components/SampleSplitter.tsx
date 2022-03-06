import React from 'react'
import './SampleSplitter.css'

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
      className={[
        'sample-drag-bar',
        dir === 'horizontal' && 'sample-drag-bar--horizontal',
        isDragging && 'sample-drag-bar--dragging',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}

export default SampleSplitter
