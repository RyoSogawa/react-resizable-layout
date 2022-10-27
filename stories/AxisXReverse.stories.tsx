import React from 'react';

import Resizable from '../src/Resizable';
import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>;

const Template: ComponentStory<typeof Resizable> = (props) => (
  <Resizable {...props}>
    {({ position: x, separatorProps }) => (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SampleBox id="left-block" theme="blue" width={`calc(100% - ${x}px)`} />
        <SampleSeparator id="splitter" {...separatorProps} />
        <SampleBox id="right-block" theme="red" width={x} size={x} />
      </div>
    )}
  </Resizable>
);

export const AxisXReverse = Template.bind({});
AxisXReverse.args = {
  axis: 'x',
  initial: 200,
  min: 100,
  max: 500,
  reverse: true,
};
