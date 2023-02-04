import React, {Suspense, useContext, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { classNames } from './helpers/classNames/classNames';
import { AboutAsync } from './pages/AboutPage/About.async';
import { MainAsync } from './pages/MainPage/MainAsync';
import "./styles/index.scss"
import { Theme } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
       {theme === Theme.LIGHT ? 
        <button onClick={toggleTheme}>Темная тема</button> 
        :
        <button onClick={toggleTheme}>Светлая тема</button>
      }
      <Link to={'/'}>главная</Link>
      <Link to={'/about'}> эбаунт</Link>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/'} element={<MainAsync/>}/>
        <Route path={'/about'} element={<AboutAsync/>}/>
      </Routes>
      </Suspense>
        </div>
  )
}

export default App