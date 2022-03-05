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
    {({ position: x, isDragging, dragBarProps }) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <SampleBox
          theme={'blue'}
          width={x}
          size={x}
          text={isDragging && 'Dragging...'}
        />
        <SampleDragBar {...dragBarProps} />
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
