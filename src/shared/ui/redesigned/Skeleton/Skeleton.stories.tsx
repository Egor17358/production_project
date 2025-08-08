import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/SkeletonRedesigned',
  component: Skeleton,
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
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

const argsFullWidth = {
  width: '100%',
  height: '200px',
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: argsFullWidth,
};
export const DarkTheme: Story = {
  args: argsFullWidth,
};
DarkTheme.decorators = [ThemeDecorator];
DarkTheme.parameters = {
  theme: Theme.DARK,
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};
export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};
CircleDark.decorators = [ThemeDecorator];
CircleDark.parameters = {
  theme: Theme.DARK,
};
