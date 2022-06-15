import { useState } from 'react'
import routes from '../api/routes';
import { useApi } from './useApi';
import { useToken } from './useToken';


export const useAuth = () => {

  const { tokenExist, removeToken, setToken } = useToken();
  const { callApi, loading } = useApi(true);
  const [ user, setUser ] = useState(false);

  const canAuth = () => {
    return tokenExist();
  }

  const logout = () => {
    callApi({
      url: routes.logout(),
      method: 'post'
    },{
      200: () => {
        console.log("Deslog");
        removeToken();
        setUser({
          isLogged: false
        })
      }
    });
  }

  const startSession = (data, token) => {
    setToken(token);
    setData({
      isLogged: true,
      ...data 
    })
  }

  const fetchUser = () => {
    callApi({
      method: 'get',
      url: routes.me()
    },{
      200: (xhr) => {
        setData({
          isLogged: true,
          ...xhr.data,
        });
      },
      401: (xhr) => {
        // console.log("aca");
        // logout();
        setUser({
          isLogged: false
        });
      }
    });
  }

  const setData = (data) => {
    setUser({
      isLogged: data.isLogged,
      id:       data.id,
      name:     data.name,
      email:    data.email
    });
  }

  return { canAuth, logout, fetchUser, startSession, user, loading }

}