import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { AppImage } from './AppImage';
// import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from '@/shared/const/theme';
// import { Skeleton } from '../Skeleton';
// import UserIcon from '../../assets/icons/user-filled.svg';
// import { Icon } from '../Icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/AppImage',
  component: AppImage,
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
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    src: 'https://i.pinimg.com/736x/88/69/de/8869de3990901fc40f8f74a93c18aaff.jpg',
    width: '100px',
    height: '100px',
    fallback: <div>{'fallback'}</div>,
    errorFallback: <div style={{width: '100px', height: '100px'}}>{'errorFallback'}</div>
  },
};

export const NormalFallback: Story = {
  args: {
    // src: 'https://error.jpg',
    width: '100px',
    height: '100px',
    fallback: <div>{'fallback'}</div>,
    errorFallback: <div style={{background: 'blue', color:'red', width: '100px', height: '100px'}}>{'errorFallback'}</div>
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
