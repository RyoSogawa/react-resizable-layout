import React, { useRef } from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'WithContainer',
  component: Resizable,
} as Meta<typeof Resizable>;

export const AxisYReverseWithContainer: StoryObj<typeof Resizable> = {
  args: {
    axis: 'y',
    initial: 100,
    min: 50,
    max: 300,
    reverse: true,
  },
  render: (props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <>
        <div style={{ padding: '16px', background: 'red' }} />
        <Resizable {...props} containerRef={containerRef}>
          {({ position: y, separatorProps }) => (
            <div
              ref={containerRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 64px)',
                overflow: 'hidden',
              }}
            >
              <SampleBox id="top-block" height={`calc(100% - ${y}px)`} theme="blue" />
              <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
              <SampleBox id="bottom-block" height={y} size={y} theme="red" />
            </div>
          )}
        </Resizable>
        <div style={{ padding: '16px', background: 'red' }} />
      </>
    );
  },
};
