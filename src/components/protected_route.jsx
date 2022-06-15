import { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import UserContext from '../lib/context';

export const ProtectedRoute = ({redirectPath = '/login', children}) => {

  const { canAuth, fetchUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {

    // no token
    if (!canAuth()) {
      navigate('/login');
    } 
    
    // no user data in state
    if (canAuth() && !user) {
      fetchUser();
    }

    // prevent render login / register
    if (typeof user === 'object') {
      if (user.isLogged && redirectPath !== '/login') {
        navigate(redirectPath);
        return;
      }
    }

  },[user]);

  return children;

}
