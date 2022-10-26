import React from 'react';

import { cn } from '../utils/cn';

const SampleBox = ({ id, width, height, theme, size, text }: any) => {
  const additionalClass =
    theme === 'blue' ? 'sample-box--blue' : theme === 'red' ? 'sample-box--red' : null;

  return (
    <div
      id={id}
      data-testid={id}
      className={cn('sample-box', additionalClass)}
      style={{
        width,
        height,
      }}
    >
      {text || 'Drag center bar to resize'}
      <br />
      {size && `(currentSize : ${size}px)`}
    </div>
  );
};

export default SampleBox;
