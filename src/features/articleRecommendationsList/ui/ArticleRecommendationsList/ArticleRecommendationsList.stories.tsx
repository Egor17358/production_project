// import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
// import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entites/Article';
// import { fn } from '@storybook/test';
import { http, HttpResponse, delay } from 'msw';
import { mswDecorator, initialize } from 'msw-storybook-addon';
import AvatarImg from 'shared/assets/tests/testimage.jpeg'

initialize();
const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    layout: 'padded', //fullscreen | centered | padded
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  img: AvatarImg,
  createdAt: '',
  views: 1022,
  user: { id: '1', username: '121' },
  blocks: [],
  type: [],
  title: 'Заголовок этого блока',
  subtitle: '122121',
};


export const Normal: Story = {
  args: {},
};
Normal.decorators = [StoreDecorator, mswDecorator];
Normal.parameters = {
  msw: {
    handlers: [
      http.get(`${__API__}/articles?_limit=3`, async () => {
        await delay(200);
        return HttpResponse.json([
          { ...article, id: '1' },
          // { ...article, id: '2' },
          // { ...article, id: '3' },
        ]);
      }),
    ],
  },
};
// export const Dark: Story = {
//   args: {},
// };
// Dark.decorators = [ThemeDecorator, StoreDecorator];
// Dark.parameters = {
//   theme: Theme.DARK,
//   state: {},
// };
