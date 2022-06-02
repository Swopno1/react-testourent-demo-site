import React from 'react';

import './App.css';
import { Navbar } from './components';
import {
  AboutUs,
  Chef,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from './container';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
    </div>
  );
};

export default App;
