import React from 'react';
import { images } from '../../constants';

const Loading = () => {
  return (
    <div className='app__bg section__padding flex__center'>
      <img src={images.spinner} alt='loading' />
    </div>
  );
};

export default Loading;
