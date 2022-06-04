import React from 'react';

import { images } from '../../constants';

const Error = ({ children }) => {
  return (
    <div className='app__404 app__wrapper app__bg section__padding flex__center'>
      <div className='app__404-container flex__center'>
        <h1 className='headtext__cormorant'>Error</h1>
        <p
          className='p__opensans'
          style={{ margin: '2rem 0 5rem 0', color: 'var(--color-light-gray)' }}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Error;
