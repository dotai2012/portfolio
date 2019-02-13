import { CURRENT_USER, PROJECT_LIST } from './type';
import { getUser, setUser } from '../services/localStorage';

const { token, user } = getUser();

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

const fetchProject = () => async (dispatch, getState, api) => {
  const res = await api.get('/project', { headers: { Authorization: token } });
  dispatch({
    type: PROJECT_LIST,
    payload: res.data,
  });
};

const postProject = data => async (dispatch, getState, api) => {
  const formData = new FormData();

  Object.keys(data).map((key) => {
    formData.append(key, data[key]);
  });

  const res = await api.post('/project', formData, { headers: { Authorization: token, 'content-type': 'multipart/form-data' } });
  console.log(res);
  // fetchProject();
};

export {
  loginUser, logoutUser, fetchProject, postProject,
};
