import React from 'react';

import { Form, Input } from '../../components';
import './Login.css';

const Login = () => {
  const handleLogIn = () => {};

  return (
    <div className='app__login section__padding'>
      <Form
        handleSubmit={handleLogIn}
        subHeading='User Login'
        formTitle='Please log in'
        formSubTitle='Enter your email and password'
      >
        <input type='text' placeholder='Enter your name' />
        <input type='email' placeholder='Enter your email' />
        <input type='password' placeholder='Enter your password' />
        <button className='custom__button'>Log In</button>
      </Form>
    </div>
  );
};

export default Login;
