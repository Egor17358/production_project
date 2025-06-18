import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import { NotificationList } from './NotificationList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse } from 'msw';
import { mswDecorator, initialize } from 'msw-storybook-addon';

initialize();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entites/NotificationList',
  component: NotificationList,
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
  decorators: [mswDecorator, StoreDecorator],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {};
Normal.parameters = {
  state: {},
  msw: {
    handlers: [
      http.get(`${__API__}/notifications`, async () => {
        // await delay(200);
        return HttpResponse.json([
          {
            id: '1',
            title: 'Уведомление',
            description: 'Поставьте лайк или комментарий',
          },
          {
            id: '2',
            title: 'Уведомление',
            description: 'Поставьте лайк или комментарий',
          },
        ]);
      }),
    ],
  },
};

export const DARK: Story = {};
DARK.decorators = [ThemeDecorator];
DARK.parameters = {
  theme: Theme.DARK,
  state: {},
  msw: {
    handlers: [
      http.get(`${__API__}/notifications`, async () => {
        // await delay(200);
        return HttpResponse.json([
          {
            id: '1',
            title: 'Уведомление',
            description: 'Поставьте лайк или комментарий',
          },
          {
            id: '2',
            title: 'Уведомление',
            description: 'Поставьте лайк или комментарий',
          },
        ]);
      }),
    ],
  },
};
