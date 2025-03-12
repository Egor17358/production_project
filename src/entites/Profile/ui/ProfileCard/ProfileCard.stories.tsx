import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entites/Country';
import { Currency } from 'entites/Currency';
import AvatarImg from 'shared/assets/tests/testimage.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entites/ProfileCard',
  component: ProfileCard,
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
  args: {
    data: {
      username: 'adminn',
      age: 11,
      country: Country.Belarus,
      lastname: 'familaya',
      first: 'name',
      city: 'gorod',
      currency: Currency.EUR,
      avatar: AvatarImg,
    },
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// const data =
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};
Primary.decorators = [StoreDecorator];
Primary.parameters = {};

export const withError: Story = {};
withError.args = {
  error: 'true',
};
withError.decorators = [StoreDecorator];

export const Loading: Story = {};
Loading.decorators = [StoreDecorator];
Loading.args = {
  isLoading: true,
};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator, StoreDecorator];
Dark.parameters = {
  theme: Theme.DARK,
};
