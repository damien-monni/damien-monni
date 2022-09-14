import React from 'react';

import { ComponentMeta } from '@storybook/react';
import Typography from './TypographyDemo';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TypographyDemo',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const TypographyDemo = () => <Typography />;
