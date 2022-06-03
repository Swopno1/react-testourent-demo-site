import React from 'react';

import { Form, SubHeading } from '../../components';
import './Login.css';

const Login = () => {
  const handleLogIn = () => {};
  const handleGoogleLogIn = () => {};

  return (
    <div className='app__login section__padding'>
      <div style={{ marginTop: '2rem' }}>
        <SubHeading>Log in</SubHeading>
      </div>
      <div>
        <Form
          handleSubmit={handleLogIn}
          subHeading='User Login'
          formTitle='Please log in'
          formSubTitle='Enter your email and password'
          className='app__login-form'
          inputDirection='col'
        >
          <input type='email' placeholder='Enter your email' />
          <input type='password' placeholder='Enter your password' />
          <button className='custom__button'>Log In</button>
        </Form>
      </div>
      <div style={{ padding: '1rem 0' }} />
      <Form formSubTitle='Login with social account'>
        <button className='custom__button' onClick={handleGoogleLogIn}>
          Log In with Google Account
        </button>
      </Form>
    </div>
  );
};

export default Login;
