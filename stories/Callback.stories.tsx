import React, { useState } from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Advanced',
  component: Resizable,
} as Meta<typeof Resizable>;

export const Callback: StoryObj<typeof Resizable> = {
  args: {
    axis: 'x',
    initial: 200,
  },
  render: (props) => {
    const [date, setDate] = useState<Date | null>(null);

    return (
      <Resizable
        {...props}
        onResizeStart={() => setDate(new Date())}
        onResizeEnd={() => alert(`You dragged!`)}
      >
        {({ position: x, separatorProps }) => (
          <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            <SampleBox
              id="left-block"
              theme="blue"
              width={x}
              size={x}
              text={date && `dragging from ${date.toISOString()}`}
            />
            <SampleSeparator id="splitter" {...separatorProps} />
            <SampleBox
              id="right-block"
              theme="red"
              width={`calc(100% - ${x}px)`}
              text={date && `dragging from ${date.toISOString()}`}
            />
          </div>
        )}
      </Resizable>
    );
  },
};
