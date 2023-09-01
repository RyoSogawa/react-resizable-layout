import React from 'react';

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
  render: (props) => (
    <Resizable
      {...props}
      onResizeStart={(args) => {
        console.table(args);
      }}
      onResizeEnd={(args) => {
        console.table(args);
      }}
    >
      {({ position: x, separatorProps }) => (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <SampleBox
            id="left-block"
            theme="blue"
            width={x}
            size={x}
            text="You can see the callback arguments in the log"
          />
          <SampleSeparator id="splitter" {...separatorProps} />
          <SampleBox id="right-block" theme="red" width={`calc(100% - ${x}px)`} />
        </div>
      )}
    </Resizable>
  ),
};
