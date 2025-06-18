import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import ProfileRating from './ProfileRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  http,
  HttpResponse,
  // delay
} from 'msw';
import { mswDecorator, initialize } from 'msw-storybook-addon';

initialize();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/ProfileRating',
  component: ProfileRating,
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
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

const profileRating = {
  id: '1',
  rate: 4,
  feedback: 'Хороший пользователь',
  userId: '1',
  profileId: '1',
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    profileId: '1',
  },
};
Normal.parameters = {
  msw: {
    handlers: [
      http.get(`${__API__}/profile-ratings?userId=1&profileId=1`, async () => {
        // await delay(200);
        return HttpResponse.json([{ ...profileRating, id: '1' }]);
      }),
    ],
  },
};
Normal.decorators = [mswDecorator, StoreDecorator];

export const DARK: Story = {
  args: {
    profileId: '1',
  },
};
DARK.decorators = [ThemeDecorator, StoreDecorator, mswDecorator];
DARK.parameters = {
  theme: Theme.DARK,
  msw: {
    handlers: [
      http.get(`${__API__}/profile-ratings?userId=1&profileId=1`, async () => {
        // await delay(200);
        return HttpResponse.json([{ ...profileRating, id: '1' }]);
      }),
    ],
  },
};
