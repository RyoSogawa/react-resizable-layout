import React from 'react';

import Resizable from '../src/Resizable';
import SampleBox from './components/SampleBox';
import SampleSplitter from './components/SampleSplitter';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>;

const Template: ComponentStory<typeof Resizable> = (props) => (
  <Resizable {...props}>
    {({ position: y, splitterProps }) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <SampleBox id="top-block" height={y} theme="blue" size={y} />
        <SampleSplitter id="splitter" dir="horizontal" {...splitterProps} />
        <SampleBox id="bottom-block" height={`calc(100% - ${y}px)`} theme="red" />
      </div>
    )}
  </Resizable>
);

export const AxisY = Template.bind({});
AxisY.args = {
  axis: 'y',
  initial: 100,
  min: 50,
  max: 300,
};
