import React from 'react'
import './SampleDragBar.css'

const SampleDragBar = ({ dir, ...props }: any) => {
  return (
    <div
      className={[
        'sample-drag-bar',
        dir === 'horizontal' && 'sample-drag-bar--horizontal',
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}

export default SampleDragBar
