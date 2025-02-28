import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundCo lor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};
Primary.decorators = [StoreDecorator];
Primary.parameters = { state: { loginForm: { username: 'name', password: '123' } } };

export const withError: Story = {
  args: {},
};
withError.decorators = [StoreDecorator];
withError.parameters = { state: { loginForm: { username: 'name', password: '123', error: 'ERROR' } } };

export const Loading: Story = {
  args: {},
};
Loading.decorators = [StoreDecorator];
Loading.parameters = { state: { loginForm: { isLoading: true } } };

// export const DarkTheme: Story = {
//   args: {
//     placeholder:
//     'Type Text',
//     value: '1331'
//   },
// };
// DarkTheme.decorators = [ThemeDecorator];
// DarkTheme.parameters = {
//   theme: Theme.DARK,
// };

// export const OutlineDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
// };
