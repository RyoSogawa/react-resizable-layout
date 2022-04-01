import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import IdeClone from './components/IdeClone'

export default {
  title: 'sample/clone',
  component: IdeClone,
} as ComponentMeta<typeof IdeClone>

const Template: ComponentStory<typeof IdeClone> = () => <IdeClone />

export const IDE = Template.bind({})
IDE.args = {}
