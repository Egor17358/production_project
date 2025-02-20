import { Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { createReduxStore, StoreProvider } from './providers/StoreProvider';
// import { t } from 'i18next';
// import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme();
  // const { t } = useTranslation('translation');
  return (
    <StoreProvider>
      <div className={classNames('app', {}, [theme])}>
        {/* <button onClick={toggleTheme}>ToGGLE</button> */}
        <Suspense fallback=''>
          <Navbar />
          <div className='content-page'>
            <Sidebar />
            <AppRouter />
            {/* {t('Hello world')} */}
          </div>
        </Suspense>
      </div>
    </StoreProvider>
  );
};

export default App;
