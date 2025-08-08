import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { Theme } from '../../src/shared/const/theme';
import { withThemeByClassName } from '@storybook/addon-themes';

const preview: Preview = {
  parameters: {
    // layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // theme: Theme.LIGHT,
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator,
    RouterDecorator,
    SuspenseDecorator,
    withThemeByClassName({
      themes: {
        light: Theme.LIGHT,
        dark: Theme.DARK,
        purple: Theme.PURPLE,
      },
      defaultTheme: 'light',
      parentSelector: '#rootApp',
    }),
    FeatureFlagsDecorator({}),
  ],
};

export default preview;
