import { Decorator } from '@storybook/react';
import { Theme } from '../../../../app/providers/ThemeProvider'
// import { Decorator } from '@storybook/react'

export const ThemeDecorator: Decorator = (Story, {parameters}) => {
  const theme: Theme = parameters.theme || 'light'; // Используйте параметры для получения темы

  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
