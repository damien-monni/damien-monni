import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chip from './Chip';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'default',
  children: 'Chip',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Chip',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Chip',
};
