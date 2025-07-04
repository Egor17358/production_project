import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/testimage.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Avatar',
  component: Avatar,
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
    // to: '/',
    // onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
