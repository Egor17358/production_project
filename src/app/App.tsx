import { Suspense } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true }, [theme])}>
      {/* <button onClick={toggleTheme}>ToGGLE</button> */}
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
          Hello world
        </div>
      </Suspense>
    </div>
  );
};

export default App;
