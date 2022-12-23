import React, { useRef } from 'react';

import Resizable from '../src/Resizable';
import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>;

const Template: ComponentStory<typeof Resizable> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div style={{ padding: '16px', background: 'red' }} />
      <div ref={containerRef}>
        <Resizable {...props} containerRef={containerRef}>
          {({ position: y, separatorProps }) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                overflow: 'hidden',
              }}
            >
              <SampleBox id="top-block" height={y} theme="blue" size={y} />
              <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
              <SampleBox id="bottom-block" height={`calc(100% - ${y}px)`} theme="red" />
            </div>
          )}
        </Resizable>
      </div>
    </>
  );
};

export const AxisYWithContainer = Template.bind({});
AxisYWithContainer.args = {
  axis: 'y',
  initial: 100,
  min: 50,
  max: 300,
};