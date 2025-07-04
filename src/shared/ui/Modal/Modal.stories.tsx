import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import styles from './Modal.module.scss';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Modal',
  component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti numquam enim consequatur est in explicabo commodi provident, quas maiores!',
    className: `${styles.testModal}`,
  },
};

export const DarkTheme: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, optio. Est neque quos qui. Voluptatem harum sint explicabo consequatur vitae!',
    className: `${styles.testModal}`,
  },
};
DarkTheme.decorators = [ThemeDecorator];
DarkTheme.parameters = {
  theme: Theme.DARK,
};

// export const OutlineDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
// };
