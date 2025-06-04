import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse, delay } from 'msw';
import { mswDecorator, initialize } from 'msw-storybook-addon';

initialize();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'padded',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const user = {
  "id": "1",
  "first": "Иван",
  "lastname": "Иванов1",
  "age": 33,
  "currency": "USD",
  "country": "Armenia",
  "city": "Vologda",
  "username": "admin",
  "avatar": "https://lastfm.freetls.fastly.net/i/u/ar0/708e7517998748bac8a19f4a42635124.png"
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
  args: {},
};
Light.decorators = [StoreDecorator];
Light.parameters = { state: {} };

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator, StoreDecorator];
Dark.parameters = {
  theme: Theme.DARK,
  state: {},
};
export const AuthNavbar: Story = {
  args: {},
};
AuthNavbar.decorators = [StoreDecorator, mswDecorator];
AuthNavbar.parameters = {
  state: { user: { authData: user } },
  msw: {
    handlers: [
      http.get(`${__API__}/notifications`, async () => {
        await delay(200);
        return HttpResponse.json([
          {
            "id": "1",
            "title": "Уведомление 1",
            "description": "Произошло какое-то событие",
            "userId": "1"
          }
        ]);
      }),
    ],
  },
};
