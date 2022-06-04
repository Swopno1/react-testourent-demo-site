import React, { useState } from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

import { Form, Loading, SubHeading } from '../../components';
import auth from '../../firebase.init';
import './Register.css';

const Register = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (userName && userEmail && password) {
      await createUserWithEmailAndPassword(userEmail, password);
      await updateProfile({ displayName: userName });
    } else {
      return alert('All field required!');
    }
  };

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };

  if (error || gError || updatingError) {
    return (
      <div>
        <p>Error: </p>
      </div>
    );
  }
  if (loading || gLoading || updating) {
    return <Loading />;
  }
  if (user || gUser) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

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
          autoComplete='false'
        >
          <input
            type='text'
            placeholder='Enter your name'
            autoComplete='name'
            onBlur={(e) => setUserName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Enter your email'
            autoComplete='email'
            onBlur={(e) => setUserEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter your password'
            autoComplete='new-password'
            onBlur={(e) => setPassword(e.target.value)}
          />
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
