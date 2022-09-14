import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dialog from './Dialog';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'My Dialog',
  onClose: () => {},
  children: <p>Body of the dialog</p>,
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  open: true,
  onClose: () => {},
  children: <p>Body of the dialog</p>,
};
