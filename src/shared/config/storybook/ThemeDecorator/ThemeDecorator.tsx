import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '../../../../app/providers/ThemeProvider';
// import { Decorator } from '@storybook/react'

export const ThemeDecorator: Decorator = (Story, { parameters }) => {
  const theme: Theme = parameters.theme || 'light'; // Используйте параметры для получения темы

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  );
};
