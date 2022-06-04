import React, { useState } from 'react';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';

import { Form, Loading, SubHeading } from '../../components';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const handleLogIn = (e) => {
    e.preventDefault();
    if (userEmail && password) {
      signInWithEmailAndPassword(userEmail, password);
    } else {
      return alert('All field required!');
    }
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  if (error || gError) {
    return (
      <div>
        <p>Error: </p>
      </div>
    );
  }
  if (loading || gLoading) {
    return <Loading />;
  }
  if (user || gUser) {
    return (
      <div>
        <p>Registered User: </p>
      </div>
    );
  }

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
            onBlur={(e) => setUserEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter your password'
            autoComplete='current-password'
            onBlur={(e) => setPassword(e.target.value)}
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
