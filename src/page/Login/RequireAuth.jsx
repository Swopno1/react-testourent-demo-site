import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { Loading } from '../../components';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
  const [aUser, aLoading] = useAuthState(auth);

  const location = useLocation();

  if (aLoading) {
    return <Loading />;
  }

  if (!aUser) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAuth;
