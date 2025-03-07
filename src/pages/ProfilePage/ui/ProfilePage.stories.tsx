import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundCo lor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {};
Normal.decorators = [StoreDecorator];
Normal.parameters = {
  state: {
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: 'Russia',
        lastname: 'asd asddas',
        first: 'asd',
        city: 'asf',
        currency: 'USD',
      },
    },
  },
};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator, StoreDecorator];
Dark.parameters = {
  theme: Theme.DARK,
  state: {
    profile: {
      form: {
        username: 'admin',
        age: 22,
        country: 'Russia',
        lastname: 'ads asdasd',
        first: 'asd',
        city: 'asf',
        currency: 'USD',
      },
    },
  },
};
