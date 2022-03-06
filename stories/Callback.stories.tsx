import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Resizable from '../src/Resizable'
import SampleSplitter from './components/SampleSplitter'
import SampleBox from './components/SampleBox'

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>

const Template: ComponentStory<typeof Resizable> = props => {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <Resizable
      {...props}
      onResizeStart={() => setDate(new Date())}
      onResizeEnd={() => alert(`You dragged!`)}
    >
      {({ position: x, splitterProps }) => (
        <div style={{ display: 'flex', height: '100vh' }}>
          <SampleBox
            theme={'blue'}
            width={x}
            size={x}
            text={date && 'dragging from ' + date.toISOString()}
          />
          <SampleSplitter {...splitterProps} />
          <SampleBox
            theme={'red'}
            width={`calc(100% - ${x}px)`}
            text={date && 'dragging from ' + date.toISOString()}
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
