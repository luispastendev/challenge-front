export const useToken = ( requireAuth = false) => {

  const nameToken =  process.env.REACT_APP_NAME_TOKEN;

  const setToken = (token = null) => {
    token && localStorage.setItem(nameToken, token);
  }

  const getToken = () => {
    return `Bearer ${localStorage.getItem(nameToken)}`;
  }

  const tokenExist = () => {
    return localStorage.getItem(nameToken) ? true : false;
  }

  const removeToken = () => {
    localStorage.removeItem(nameToken);
  }

  return { setToken ,getToken, tokenExist, removeToken }

}