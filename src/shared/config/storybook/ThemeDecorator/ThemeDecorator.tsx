import { Decorator } from '@storybook/react';
// eslint-disable-next-line my-plugin-test-for-me/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
// import { Decorator } from '@storybook/react'

export const ThemeDecorator: Decorator = (Story, { parameters }) => {
  const theme: Theme = parameters.theme || 'light'; // Используйте параметры для получения темы

  return (
    <ThemeProvider initialTheme={theme}>
      <div id='rootApp' className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
