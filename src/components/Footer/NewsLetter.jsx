import React from 'react';
import Form from '../Form/Form';

const NewsLetter = () => {
  const handleSubscribe = () => {};

  return (
    <Form
      handleSubmit={handleSubscribe}
      subHeading='Newsletter'
      formTitle='Subscribe to Our Newsletter'
      formSubTitle='And never miss latest Updates!'
    >
      <input type='email' placeholder='Enter your email address' />
      <button className='custom__button'>Subscribe</button>
    </Form>
  );
};

export default NewsLetter;
