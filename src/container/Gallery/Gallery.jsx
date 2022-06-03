import React, { useRef } from 'react';
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { data } from '../../constants';

import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading>Instagram</SubHeading>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#aaa', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>
          View More
        </button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {data.gallery.map((image, index) => (
            <div
              className='app__gallery-images_card flex__center'
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt='gallery' />
              <BsInstagram className='gallery__image-icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
