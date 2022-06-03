import React from 'react';

import { SubHeading } from '../../components';
import { data, images } from '../../constants';
import './Laurels.css';

const AwartCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt='title' />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{ color: '#DCCA87' }}>
        {title}
      </p>
      <p className='p__cormorant'>{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='award'>
      <div className='app__wrapper_info'>
        <SubHeading>Awards & recognition</SubHeading>
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards'>
          {data.awards.map((award) => (
            <AwartCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='' />
      </div>
    </div>
  );
};

export default Laurels;
