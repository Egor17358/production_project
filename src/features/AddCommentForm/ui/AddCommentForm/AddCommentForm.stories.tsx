import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AddCommentForm from './AddCommentForm';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
// import { Country } from '@/entites/Country';
// import { Currency } from '@/entites/Currency';
// import AvatarImg from '@/shared/assets/tests/testimage.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
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
    onSendComment: fn(),
  },
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// const data =
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {};
Normal.decorators = [StoreDecorator];
Normal.parameters = {};
