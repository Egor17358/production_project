import { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
  // const { t } = useTranslation('translation');

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* <Route path={'/'} element={<MainPage />} /> */}
        {/* <Route path={'/about'} element={<AboutPage />} /> */}
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={<div className='page-wrapper'>{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
