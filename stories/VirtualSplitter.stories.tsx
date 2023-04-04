import React from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>;

const Template: ComponentStory<typeof Resizable> = (props) => (
  <Resizable {...props}>
    {({ position: x, fixedPosition: fixedX, isDragging, separatorProps }) => (
      <div
        id="wrapper"
        style={{
          position: 'relative',
          display: 'flex',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <SampleBox id="left-block" theme="blue" width={fixedX} size={fixedX} />
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
        <SampleBox id="right-block" theme="red" width={`calc(100% - ${fixedX}px)`} />
      </div>
    )}
  </Resizable>
);

export const VirtualSplitter = Template.bind({});
VirtualSplitter.args = {
  axis: 'x',
  initial: 200,
  min: 100,
  max: 500,
};
