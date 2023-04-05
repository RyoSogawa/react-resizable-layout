import React from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Advanced',
  component: Resizable,
} as Meta<typeof Resizable>;

export const DraggingState: StoryObj<typeof Resizable> = {
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
  },
  render: (props) => (
    <Resizable {...props}>
      {({ position: x, isDragging, separatorProps }) => (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <SampleBox
            id="left-block"
            theme="blue"
            width={x}
            size={x}
            text={isDragging && 'Dragging...'}
          />
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox
            id="right-block"
            theme="red"
            width={`calc(100% - ${x}px)`}
            text={isDragging && 'Dragging...'}
          />
        </div>
      )}
    </Resizable>
  ),
};
