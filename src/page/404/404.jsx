import React from 'react';

import { SubHeading } from '../../components';
import './404.css';

const PageNotFound = () => {
  return (
    <div className='app__404 app__wrapper app__bg section__padding flex__center'>
      <div className='app__404-container flex__center'>
        <SubHeading title='Page not found' />
        <h1 className='headtext__cormorant'>404</h1>
        <p
          className='p__opensans'
          style={{ margin: '2rem 0 5rem 0', color: 'var(--color-light-gray)' }}
        >
          Please check url again!
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
