import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, Chef, Header, SpecialMenu } from './container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
};

export default App;
