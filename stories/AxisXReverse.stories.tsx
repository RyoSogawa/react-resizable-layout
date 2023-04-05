import React from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Basic',
  component: Resizable,
} as Meta<typeof Resizable>;

export const AxisXReverse: StoryObj<typeof Resizable> = {
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
    reverse: true,
  },
  render: (props) => (
    <Resizable {...props}>
      {({ position: x, separatorProps }) => (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <SampleBox id="left-block" theme="blue" width={`calc(100% - ${x}px)`} />
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={x} size={x} />
        </div>
      )}
    </Resizable>
  ),
};
