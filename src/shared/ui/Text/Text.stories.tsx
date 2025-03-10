import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullwidth',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundCo lor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const darkThemeParameters = {
  theme: Theme.DARK,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Title lorem title',
    text: 'Description Example Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem title',
    text: 'Description Example Description',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title lorem title',
  },
};
export const OnlyText: Story = {
  args: {
    text: 'Description Example Description',
  },
};
export const PrimaryDark: Story = {
  args: {
    title: 'Title lorem title',
    text: 'Description Example Description',
  },
};
PrimaryDark.decorators = [ThemeDecorator];
PrimaryDark.parameters = darkThemeParameters;
export const OnlyTitleDark: Story = {
  args: {
    title: 'Title lorem title',
  },
};
OnlyTitleDark.decorators = [ThemeDecorator];
OnlyTitleDark.parameters = darkThemeParameters;

export const OnlyTextDark: Story = {
  args: {
    text: 'Description Example Description',
  },
};
OnlyTextDark.decorators = [ThemeDecorator];
OnlyTextDark.parameters = darkThemeParameters;

export const SizeL: Story = {
  args: {
    title: 'Title lorem title',
    text: 'Description Example Description',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title lorem title',
    text: 'Description Example Description',
    size: TextSize.M,
  },
};

// export const OutlineDark: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
// };
// OutlineDark.decorators = [ThemeDecorator];
// OutlineDark.parameters = {
//   theme: Theme.DARK,
// };
