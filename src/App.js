import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Error, Navbar } from './components';
import { Footer } from './container';
import { BookTable, Home, Login, Register, RequireAuth } from './page';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/booknow'
          element={
            <RequireAuth>
              <BookTable />
            </RequireAuth>
          }
        />
        <Route
          path='*'
          element={
            <Error subHeading='Page Not Found' errorCode='404'>
              Please check url again!
            </Error>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
