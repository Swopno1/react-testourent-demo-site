import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Navbar } from './components';
import { Footer } from './container';
import { Home, Login, PageNotFound } from './page';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
