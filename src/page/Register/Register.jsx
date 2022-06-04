import React from 'react';
import { Form, SubHeading } from '../../components';

import './Register.css';

const Register = () => {
  const handleRegister = () => {};
  const handleGoogleLogIn = () => {};

  return (
    <div className='app__login section__padding'>
      <div style={{ marginTop: '2rem' }}>
        <SubHeading>New User</SubHeading>
      </div>
      <div>
        <Form
          handleSubmit={handleRegister}
          formTitle='Register'
          formSubTitle='Please register with name, email and password!'
          className='app__login-form'
        >
          <input type='text' placeholder='Enter your name' />
          <input type='email' placeholder='Enter your email' />
          <input type='password' placeholder='Enter your password' />
          <button className='custom__button'>Register</button>
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

export default Register;
