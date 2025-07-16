import type { Meta, StoryObj } from '@storybook/react';

import SettingsPage from './SettingsPage';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import { fn } from '@storybook/test';

const meta = {
  title: 'pages/SettingsPage',
  component: SettingsPage,
  parameters: {
    layout: 'padded', //fullscreen | centered | padded
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof SettingsPage>;

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
