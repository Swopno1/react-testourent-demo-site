import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';

import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title='Chase the new flavour' />
      </div>
      <div className='app__wrapper_img'></div>
    </div>
  );
};

export default Header;
