import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';

import ArticleRating from './ArticleRating';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { http, HttpResponse, delay } from 'msw';
import { mswDecorator, initialize } from 'msw-storybook-addon';

initialize();

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
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
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

const articleRating = {
  id: '1',
  rate: 4,
  feedback: 'Хорошая статья',
  userId: '1',
  articleId: '1',
};
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    articleId: '1',
  },
};
Normal.parameters = {
  state: {
    user: {
      authData: { id: '1' },
    },
  },
  msw: {
    handlers: [
      http.get(`${__API__}/article-ratings?userId=1&articleId=1`, async () => {
        // await delay(200);
        return HttpResponse.json([{ ...articleRating }]);
      }),
    ],
  },
};
Normal.decorators = [StoreDecorator, mswDecorator];

export const NormalWithoutRate: Story = {
  args: {
    articleId: '1',
  },
};
NormalWithoutRate.parameters = {
  state: {
    user: {
      authData: { id: '1' },
    },
  },
  msw: {
    handlers: [
      http.get(`${__API__}/article-ratings?userId=1&articleId=1`, async () => {
        // await delay(200);
        return HttpResponse.json([{ ...articleRating, rate: 0 }]);
      }),
    ],
  },
};

export const DARK: Story = {
  args: {
    articleId: '1',
  },
};
DARK.decorators = [ThemeDecorator];
DARK.parameters = {
  theme: Theme.DARK,
  state: {
    user: {
      authData: { id: '1' },
    },
  },
  msw: {
    handlers: [
      http.get(`${__API__}/article-ratings?userId=1&articleId=1`, async () => {
        // await delay(200);
        return HttpResponse.json([{ ...articleRating }]);
      }),
    ],
  },
};
