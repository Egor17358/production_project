import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/ButtonRedesigned',
  component: Button,
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
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    color: 'normal',
  },
};
export const PrimaryError: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    color: 'error',
  },
};
export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
    color: 'normal',
  },
};
export const ClearError: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
    color: 'error',
  },
};
export const Filled: Story = {
  args: {
    children: 'Text',
    variant: 'filled',
    color: 'normal',
  },
};
export const FilledError: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
    color: 'error',
  },
};
