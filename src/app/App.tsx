import React, { Suspense, useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';

import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { MainPageAsync } from 'pages/MainPage/ui/MainPage.async';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTranslation } from 'react-i18next';

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
