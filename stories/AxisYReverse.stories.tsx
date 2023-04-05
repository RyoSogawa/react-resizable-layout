import React from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Basic',
  component: Resizable,
} as Meta<typeof Resizable>;

export const AxisYReverse: StoryObj<typeof Resizable> = {
  args: {
    axis: 'y',
    initial: 100,
    min: 50,
    max: 300,
    reverse: true,
  },
  render: (props) => (
    <Resizable {...props}>
      {({ position: y, separatorProps }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <SampleBox id="top-block" height={`calc(100% - ${y}px)`} theme="blue" />
          <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
          <SampleBox id="bottom-block" height={y} theme="red" size={y} />
        </div>
      )}
    </Resizable>
  ),
};
