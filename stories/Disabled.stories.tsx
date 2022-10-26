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
    {({ position: x, splitterProps }) => (
      <div id="wrapper" style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SampleBox id="left-block" theme="blue" width={x} size={x} />
        <SampleSplitter id="splitter" disabled {...splitterProps} />
        <SampleBox id="right-block" theme="red" width={`calc(100% - ${x}px)`} />
      </div>
    )}
  </Resizable>
);

export const Disabled = Template.bind({});
Disabled.args = {
  axis: 'x',
  initial: 200,
  min: 100,
  max: 500,
  disabled: true,
};
