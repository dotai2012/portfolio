import {
  CURRENT_USER,
} from './type';

import { setUser } from '../services/localStorage';

const loginUser = (email, password) => async (dispatch, getState, api) => {
  const res = await api.post('/user/login', { email, password });
  if (res.data.success) {
    setUser(res.data.token, res.data.user);
    dispatch({
      type: CURRENT_USER,
      payload: res.data.user,
    });
  }
};

const logoutUser = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: CURRENT_USER,
    payload: null,
  });
};

export {
  loginUser, logoutUser,
};
