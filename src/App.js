import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, Header, SpecialMenu } from './container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
    </div>
  );
};

export default App;
