import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { Flex } from './Flex';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Flex',
  component: Flex,
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
  args: {
    children: (
      <>
        <div>{'first'}</div>
        <div>{'first'}</div>
        <div>{'first'}</div>
        <div>{'first'}</div>
        <div>{'first'}</div>
      </>
    ),
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Row: Story = {
  args: {
    direction: 'row',
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};

export const RowGap4: Story = {
  args: {
    direction: 'row',
    gap: '4',
  },
};

export const RowGap8: Story = {
  args: {
    direction: 'row',
    gap: '8',
  },
};

export const RowGap16: Story = {
  args: {
    direction: 'row',
    gap: '16',
  },
};

export const RowGap32: Story = {
  args: {
    direction: 'row',
    gap: '32',
  },
};

export const ColumnGap4: Story = {
  args: {
    direction: 'column',
    gap: '4',
  },
};

export const ColumnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
  },
};

export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
  },
};

export const ColumnGap32: Story = {
  args: {
    direction: 'column',
    gap: '32',
  },
};

export const ColumnAlignStart: Story = {
  args: {
    direction: 'column',
    align: 'start',
  },
};

export const ColumnAlignCenter: Story = {
  args: {
    direction: 'column',
    align: 'center',
  },
};

export const ColumnAlignEnd: Story = {
  args: {
    direction: 'column',
    align: 'end',
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
