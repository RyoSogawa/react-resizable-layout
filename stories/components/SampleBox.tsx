import React from 'react'
import './SampleBox.css'

const SampleBox = ({ width, height, theme, size }: any) => {
  const additionalClass =
    theme === 'blue'
      ? 'sample-box--blue'
      : theme === 'red'
      ? 'sample-box--red'
      : null

  return (
    <div
      className={['sample-box', additionalClass].filter(Boolean).join(' ')}
      style={{
        width,
        height,
      }}
    >
      Drag center bar to resize
      <br />
      {size && `(currentSize : ${size}px)`}
    </div>
  )
}

export default SampleBox
