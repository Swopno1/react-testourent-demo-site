import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, Header } from './container';

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
