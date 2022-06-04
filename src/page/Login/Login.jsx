import React, { useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import { Error, Form, Loading, SubHeading } from '../../components';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [aUser, aLoading, aError] = useAuthState(auth);

  const navigate = useNavigate();

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

  if (error || gError || aError) {
    return (
      <>
        {error && (
          <Error subHeading='Error' errorCode='401'>
            {error.message}
          </Error>
        )}
        {gError && (
          <Error subHeading='Error' errorCode='401'>
            {gError.message}
          </Error>
        )}
        {aError && (
          <Error subHeading='Error' errorCode='401'>
            {aError.message}
          </Error>
        )}
      </>
    );
  }

  if (loading || gLoading || aLoading) {
    return <Loading />;
  }

  if (user || gUser || aUser) {
    navigate('/', { replace: true });
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
