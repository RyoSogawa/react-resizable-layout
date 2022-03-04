import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Resizable from '../src/Resizable'
import SampleDragBar from './components/SampleDragBar'
import SampleBox from './components/SampleBox'

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>

const Template: ComponentStory<typeof Resizable> = props => {
  const [dragging, setDragging] = useState(false)

  return (
    <Resizable
      {...props}
      onResizeStart={() => setDragging(true)}
      onResizeEnd={() => setDragging(false)}
    >
      {({ position: x, dragBarProps }) => (
        <div style={{ display: 'flex', height: '100vh' }}>
          <SampleBox
            theme={'blue'}
            width={x}
            size={x}
            text={dragging && 'dragging...'}
          />
          <SampleDragBar {...dragBarProps} />
          <SampleBox
            theme={'red'}
            width={`calc(100% - ${x}px)`}
            text={dragging && 'dragging...'}
          />
        </div>
      )}
    </Resizable>
  )
}

export const Callback = Template.bind({})
Callback.args = {
  axis: 'x',
  initial: 200,
}
