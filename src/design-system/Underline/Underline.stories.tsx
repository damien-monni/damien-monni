import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Underline from './Underline';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Underline',
  component: Underline,
} as ComponentMeta<typeof Underline>;

const Template: ComponentStory<typeof Underline> = (args) => (
  <Underline {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-80',
};

export const Colored = Template.bind({});
Colored.args = {
  className: 'w-80 fill-blue-500',
};
