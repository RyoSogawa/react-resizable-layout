import React from 'react';

import IdeClone from './components/IdeClone';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Example',
  component: IdeClone,
} as ComponentMeta<typeof IdeClone>;

const Template: ComponentStory<typeof IdeClone> = () => <IdeClone />;

export const IDEClone = Template.bind({});
IDEClone.args = {};
