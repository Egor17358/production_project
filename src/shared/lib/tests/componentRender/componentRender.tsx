import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '@/shared/config/i18n/i18nForTests';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line my-plugin-test-for-me/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line my-plugin-test-for-me/layer-imports
import '@/app/styles/index.scss';
export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: componentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider initialTheme={theme}>
            <div id="rootApp" className={`app ${theme}`}>
              {/* <Story /> */}
              {children}
            </div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function ComponentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
