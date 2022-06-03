import React from 'react';

// import { NewsLetter } from '../../components';

import {
  AboutUs,
  Chef,
  FindUs,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from '../../container';

const Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      {/* <NewsLetter /> */}
    </>
  );
};

export default Home;
