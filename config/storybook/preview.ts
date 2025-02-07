import type { Preview } from "@storybook/react";
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    // layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    theme: Theme.LIGHT,
  },
  decorators: [StyleDecorator,ThemeDecorator, RouterDecorator],
};

export default preview;

