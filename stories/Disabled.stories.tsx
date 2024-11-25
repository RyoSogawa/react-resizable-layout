import React from 'react';

import { fn } from '@storybook/test';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Basic',
  component: Resizable,
  args: {
    onResizeStart: fn(),
    onResizeEnd: fn(),
  },
} as Meta<typeof Resizable>;

export const Disabled: StoryObj<typeof Resizable> = {
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
    disabled: true,
  },
  render: (props) => (
    <Resizable {...props}>
      {({ position: x, separatorProps }) => (
        <div id="wrapper" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <SampleBox id="left-block" theme="blue" width={x} size={x} />
          <SampleSeparator id="splitter" disabled {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={`calc(100% - ${x}px)`} />
        </div>
      )}
    </Resizable>
  ),
};
