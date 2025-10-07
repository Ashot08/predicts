import { Routes, Route, Link } from 'react-router-dom';
import { PageOne } from './pages/pageOne/PageOne.async';
import { Suspense, useState } from 'react';
import { PageTwo } from './pages/pageTwo/PageTwo.async';
import "./index.scss";
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';



const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <div>
        <button onClick={toggleTheme}>Theme</button>
      </div>

      <div>
        <Link to={'/'}>HOME</Link>
        <Link to={'/one'}>ONE</Link>
        <Link to={'/two'}>TWO</Link>
      </div>

      <Routes>
        <Route path="/one" element={<Suspense fallback={<div>Loading...</div>}><PageOne /></Suspense>} />
        <Route path="/two" element={<PageTwo />} />
      </Routes>
    </div>
  );
};

export default App;
