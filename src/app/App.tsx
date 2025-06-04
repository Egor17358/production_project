import { Suspense, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from '@/entites/User';
// import { t } from 'i18next';
// import { useTranslation } from 'react-i18next';

const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  // const { t } = useTranslation('translation');
  return (
    <div className={classNames('app', {}, [theme])}>
      {/* <button onClick={toggleTheme}>ToGGLE</button> */}
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {inited && <AppRouter />}
          {/* {t('Hello world')} */}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
