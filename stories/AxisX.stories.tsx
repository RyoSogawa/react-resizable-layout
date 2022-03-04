import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Resizable from '../src/Resizable'
import SampleDragBar from './components/SampleDragBar'
import SampleBox from './components/SampleBox'

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>

const Template: ComponentStory<typeof Resizable> = props => (
  <Resizable {...props}>
    {({ position: x, dragBarProps }) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <SampleBox theme={'blue'} width={x} size={x} />
        <SampleDragBar {...dragBarProps} />
        <SampleBox theme={'red'} width={`calc(100% - ${x}px)`} />
      </div>
    )}
  </Resizable>
)

export const AxisX = Template.bind({})
AxisX.args = {
  axis: 'x',
  initial: 200,
  min: 100,
  max: 500,
}
