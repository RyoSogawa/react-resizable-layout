import React, { useState } from 'react';

import { cn } from '../utils/cn';

const SampleSeparator = ({ id = 'drag-bar', dir, isDragging, disabled, ...props }: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <hr
      id={id}
      data-testid={id}
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'sample-drag-bar',
        dir === 'horizontal' && 'sample-drag-bar--horizontal',
        !disabled && (isDragging || isFocused) && 'sample-drag-bar--dragging',
        disabled && 'disabled',
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};

export default SampleSeparator;
