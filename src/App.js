import React from 'react';

import './App.css';
import { Navbar } from './components';
import { AboutUs, Chef, Header, Intro, SpecialMenu } from './container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
};

export default App;
