import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Resizable from '../src/Resizable'
import SampleSplitter from './components/SampleSplitter'
import SampleBox from './components/SampleBox'

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>

const Template: ComponentStory<typeof Resizable> = props => (
  <Resizable {...props}>
    {({ position: y, splitterProps }) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <SampleBox height={`calc(100% - ${y}px)`} theme={'blue'} />
        <SampleSplitter dir={'horizontal'} {...splitterProps} />
        <SampleBox height={y} theme={'red'} size={y} />
      </div>
    )}
  </Resizable>
)

export const AxisYReverse = Template.bind({})
AxisYReverse.args = {
  axis: 'y',
  initial: 100,
  min: 50,
  max: 300,
  reverse: true,
}
