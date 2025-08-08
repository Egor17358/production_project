import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/PageError',
  component: PageError,
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
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {},
};

export const LightRedesigned: Story = {
  args: {},
};
LightRedesigned.decorators = [NewDesignDecorator];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator];
Dark.parameters = {
  theme: Theme.DARK,
};

export const DarkRedesigned: Story = {
  args: {},
};
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator];
DarkRedesigned.parameters = {
  theme: Theme.DARK,
};
