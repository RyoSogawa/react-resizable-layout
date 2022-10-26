import React from 'react';

import { cn } from '../utils/cn';

const SampleBox = ({ id, width, height, theme, size, text }: any) => {
  const additionalClass = (() => {
    switch (theme) {
      case 'blue':
        return 'sample-box--blue';
      case 'red':
        return 'sample-box--red';
      default:
        return null;
    }
  })();

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
