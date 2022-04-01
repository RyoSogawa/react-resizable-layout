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
      <div
        id={'wrapper'}
        style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}
      >
        <SampleBox id={'left-block'} theme={'blue'} width={x} size={x} />
        <SampleSplitter id={'splitter'} {...splitterProps} />
        <SampleBox
          id={'right-block'}
          theme={'red'}
          width={`calc(100% - ${x}px)`}
        />
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
