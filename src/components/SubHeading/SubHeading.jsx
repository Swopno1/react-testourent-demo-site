import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ children }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{children}</p>
    <img src={images.spoon} alt='spoon_image' className='spoon__img' />
  </div>
);

export default SubHeading;
