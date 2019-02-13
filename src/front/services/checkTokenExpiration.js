import jwtDecode from 'jwt-decode';

const checkTokenExpirationMiddleware = store => next => (action) => {
  const token = localStorage.getItem('token') && localStorage.getItem('token').replace('Bearer ', '');
  if (token && jwtDecode(token).exp < Date.now() / 1000) {
    next(action);
    localStorage.clear();
  }
  next(action);
};

export default checkTokenExpirationMiddleware;
