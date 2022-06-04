import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Error.css';

const Error = ({ subHeading, errorCode, children }) => {
  return (
    <div className='app__error app__wrapper app__bg section__padding flex__center'>
      <div className='app__error-container flex__center'>
        <SubHeading>{subHeading}</SubHeading>
        <h1 className='headtext__cormorant'>{errorCode}</h1>
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
