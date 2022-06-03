import React from 'react';

import './NewsLetter.css';

const NewsLetter = () => {
  const handleSubscribe = () => {
    console.log('Subscribed!');
  };

  return (
    <form className='app__newsletter' onSubmit={handleSubscribe}>
      <div className='app__newsletter-heading'>
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your email address' />
        <button type='submit' className='custom__button'>
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
