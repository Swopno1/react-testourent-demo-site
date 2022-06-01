import React from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './container/Header/AboutUs/AboutUs';
import Header from './container/Header/Header';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
};

export default App;
