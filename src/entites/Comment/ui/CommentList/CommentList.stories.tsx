import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entites/Comment/CommentList',
  component: CommentList,
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
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    comments: [{ id: '1', text: 'aaaa', user: { id: '1', username: 'userName' } }, { id: '2', text: 'asasd', user: { id: '2', username: 'userName2' } }],
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
};

// export const DARK: Story = {
//   args: {

//   },
// };
// DARK.decorators = [ThemeDecorator];
// DARK.parameters = {
//   theme: Theme.DARK,
// };
