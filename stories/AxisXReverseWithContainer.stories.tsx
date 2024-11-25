import React, { useRef } from 'react';

import { fn } from '@storybook/test';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'WithContainer',
  component: Resizable,
  args: {
    onResizeStart: fn(),
    onResizeEnd: fn(),
  },
} as Meta<typeof Resizable>;

export const AxisXReverseWithContainer: StoryObj<typeof Resizable> = {
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
    reverse: true,
  },
  render: (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '16px', background: 'red' }} />
        <Resizable {...props} containerRef={containerRef}>
          {({ position: x, separatorProps }) => (
            <div
              ref={containerRef}
              style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden' }}
            >
              <SampleBox id="left-block" theme="blue" width={`calc(100% - ${x}px)`} />
              <SampleSeparator id="splitter" {...separatorProps} />
              <SampleBox id="right-block" theme="red" width={x} size={x} />
            </div>
          )}
        </Resizable>
        <div style={{ padding: '16px', background: 'red' }} />
      </div>
    );
  },
};
