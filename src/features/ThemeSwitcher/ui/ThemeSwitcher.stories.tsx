import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundCo lor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {},
};
Normal.decorators = [StoreDecorator];

export const NormalRedesigned: Story = {
  args: {},
};
NormalRedesigned.decorators = [NewDesignDecorator, StoreDecorator];

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator, StoreDecorator];
Dark.parameters = {
  theme: Theme.DARK,
};

export const DarkRedesigned: Story = {
  args: {},
};
DarkRedesigned.decorators = [
  NewDesignDecorator,
  ThemeDecorator,
  StoreDecorator,
];
DarkRedesigned.parameters = {
  theme: Theme.DARK,
};
