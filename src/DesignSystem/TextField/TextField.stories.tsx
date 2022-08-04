import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './TextField';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label:',
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'Label:',
  multiline: true,
  inputProps: { rows: 4 },
};
