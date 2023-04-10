import React from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Advanced',
  component: Resizable,
} as Meta<typeof Resizable>;

export const VirtualSplitter: StoryObj<typeof Resizable> = {
  args: {
    axis: 'x',
    initial: 200,
    min: 100,
    max: 500,
  },
  render: (props) => (
    <Resizable {...props}>
      {({ position: x, endPosition: endX, isDragging, separatorProps }) => (
        <div
          id="wrapper"
          style={{
            position: 'relative',
            display: 'flex',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <SampleBox id="left-block" theme="blue" width={endX} size={endX} />
          <SampleSeparator id="splitter" />
          <SampleSeparator
            id="virtual-splitter"
            {...separatorProps}
            style={{
              position: 'absolute',
              top: 0,
              left: x,
              height: '100%',
              opacity: isDragging ? 0.3 : 0,
            }}
          />
          <SampleBox id="right-block" theme="red" width={`calc(100% - ${endX}px)`} />
        </div>
      )}
    </Resizable>
  ),
};
