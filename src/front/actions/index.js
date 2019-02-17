import _ from 'lodash';

import { CURRENT_USER, PROJECT_LIST, CURRENT_PROJECT, DELETE_PROJECT } from './type';
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

const fetchProjects = () => async (dispatch, getState, api) => {
  const res = await api.get('/project', { headers: { Authorization: token } });
  dispatch({
    type: PROJECT_LIST,
    payload: res.data.msg,
  });
};

const fetchProject = (id, cb) => async (dispatch, getState, api) => {
  const res = await api.get(`/project/${id}`, { headers: { Authorization: token } });
  dispatch({
    type: CURRENT_PROJECT,
    payload: res.data.msg,
  });
  cb();
};

const postProject = data => async (dispatch, getState, api) => {
  const formData = new FormData();

  Object.keys(data).map((key) => {
    if (Array.isArray(data[key])) {
      data[key].map((file) => {
        formData.append(key, file);
      });
    } else {
      formData.append(key, data[key]);
    }
  });

  await api.post('/project', formData, { headers: { Authorization: token, 'content-type': 'multipart/form-data' } });
};

const deleteProject = id => async (dispatch, getState, api) => {
  await api.delete(`/project/${id}`, { headers: { Authorization: token } });

  const { projects } = getState();
  const removeItem = _.remove(projects, o => o._id === id);
  dispatch({
    type: DELETE_PROJECT,
    payload: removeItem,
  });
};

export {
  loginUser, logoutUser, fetchProject, fetchProjects, postProject, deleteProject,
};
