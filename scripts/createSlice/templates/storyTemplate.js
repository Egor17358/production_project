// eslint-disable-next-line no-undef
module.exports = (layer, componentName) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import { fn } from '@storybook/test';

const meta = {
  title: '${layer}/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'padded', //fullscreen | centered | padded
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use \`fn\` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

// export const Dark: Story = {
//   args: {},
// };
// Dark.decorators = [ThemeDecorator, StoreDecorator];
// Dark.parameters = {
//   theme: Theme.DARK,
//   state: {},
// };
`;
