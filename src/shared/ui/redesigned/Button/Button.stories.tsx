// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

// import { Button, ButtonSize, ButtonTheme } from './Button';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '@/shared/const/theme';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'shared/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     // backgroundCo lor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary: Story = {
//   args: {
//     children: 'Text',
//   },
// };
// export const Clear: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR,
//   },
// };
// export const ClearInverted: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.CLEAR_INVERTED,
//   },
// };
// export const Outline: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//   },
// };

// export const OutlineSizeL: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.L,
//   },
// };
// export const OutlineSizeXL: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.OUTLINE,
//     size: ButtonSize.XL,
//   },
// };

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

// export const BackgroundTheme: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND,
//   },
// };

// export const BackgroundInvertedTheme: Story = {
//   args: {
//     children: 'Text',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//   },
// };
// export const Square: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//   },
// };
// export const SquareSizeL: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.L,
//   },
// };
// export const SquareSizeXL: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.BACKGROUND_INVERTED,
//     square: true,
//     size: ButtonSize.XL,
//   },
// };
// export const Disabled: Story = {
//   args: {
//     children: '>',
//     theme: ButtonTheme.OUTLINE,
//     disabled: true,
//   },
// };
