import React from 'react';

import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';
import Resizable from '../src/Resizable';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'main/Basic',
  component: Resizable,
} as ComponentMeta<typeof Resizable>;

const Template: ComponentStory<typeof Resizable> = (props) => (
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
);

export const AxisYReverse = Template.bind({});
AxisYReverse.args = {
  axis: 'y',
  initial: 100,
  min: 50,
  max: 300,
  reverse: true,
};
