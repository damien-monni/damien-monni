import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Drawer from './Drawer';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Drawer',
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'My drawer',
  onClose: () => {},
  children: <p>Body of the drawer</p>,
};
