import { useJsonSettings } from '@/entities/User';
import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
  const WithTheme = () => {
    const { theme: defaultTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };

  WithTheme.displayName = `WithTheme(${Component.displayName})`;
  return WithTheme;
};
