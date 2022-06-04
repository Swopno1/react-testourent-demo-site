import React from 'react';
// import { Link } from 'react-router-dom';

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
      <div className=''>
        <Form
          handleSubmit={handleLogIn}
          formTitle='Please log in'
          formSubTitle='Enter your email and password'
          className='app__login-form'
        >
          <input
            type='email'
            placeholder='Enter your email'
            autoComplete='username'
          />
          <input
            type='password'
            placeholder='Enter your password'
            autoComplete='current-password'
          />
          <button className='custom__button'>Log In</button>
        </Form>
      </div>
      <div className='p__opensans' style={{ padding: '1rem 0' }}>
        {/* New in this site? <Link to='/register'>Register Now</Link>. */}
      </div>
      <Form formSubTitle='Login with social account'>
        <button className='custom__button' onClick={handleGoogleLogIn}>
          Log In with Google Account
        </button>
      </Form>
    </div>
  );
};

export default Login;
