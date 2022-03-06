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
    {({ position: x, isDragging, splitterProps }) => (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <SampleBox
          theme={'blue'}
          width={x}
          size={x}
          text={isDragging && 'Dragging...'}
        />
        <SampleSplitter {...splitterProps} />
        <SampleBox
          theme={'red'}
          width={`calc(100% - ${x}px)`}
          text={isDragging && 'Dragging...'}
        />
      </div>
    )}
  </Resizable>
)

export const DraggingState = Template.bind({})
DraggingState.args = {
  axis: 'x',
  initial: 200,
  min: 100,
  max: 500,
}
