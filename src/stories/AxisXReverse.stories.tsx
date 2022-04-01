import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Resizable from '../Resizable'
import SampleSplitter from './components/SampleSplitter'
import SampleBox from './components/SampleBox'

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>

const Template: ComponentStory<typeof Resizable> = props => (
  <Resizable {...props}>
    {({ position: x, splitterProps }) => (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SampleBox
          id={'left-block'}
          theme={'blue'}
          width={`calc(100% - ${x}px)`}
        />
        <SampleSplitter id={'splitter'} {...splitterProps} />
        <SampleBox id={'right-block'} theme={'red'} width={x} size={x} />
      </div>
    )}
  </Resizable>
)

export const AxisXReverse = Template.bind({})
AxisXReverse.args = {
  axis: 'x',
  initial: 200,
  min: 100,
  max: 500,
  reverse: true,
}
