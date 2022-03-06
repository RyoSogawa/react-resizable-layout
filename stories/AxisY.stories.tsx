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
        <SampleBox height={y} theme={'blue'} size={y} />
        <SampleSplitter dir={'horizontal'} {...splitterProps} />
        <SampleBox height={`calc(100% - ${y}px)`} theme={'red'} />
      </div>
    )}
  </Resizable>
)

export const AxisY = Template.bind({})
AxisY.args = {
  axis: 'y',
  initial: 100,
  min: 50,
  max: 300,
}
