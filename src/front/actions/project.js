import _ from 'lodash';

import {
  PROJECT_LIST, CURRENT_PROJECT, DELETE_PROJECT,
} from './type';
import { getUser } from '../services/localStorage';

const { token } = getUser();

const fetchProjects = () => async (dispatch, getState, api) => {
  const res = await api.get('/project', { headers: { Authorization: token } });
  dispatch({
    type: PROJECT_LIST,
    payload: res.data.msg,
  });
};

const fetchProject = slug => async (dispatch, getState, api) => {
  const res = await api.get(`/project/${slug}`, { headers: { Authorization: token } });
  dispatch({
    type: CURRENT_PROJECT,
    payload: res.data.msg,
  });
  return res;
};

const postProject = data => async (dispatch, getState, api) => {
  const formData = new FormData();

  Object.keys(data).map((key) => {
    if (Array.isArray(data[key])) {
      data[key].map((file) => {
        if (_.isObject(file) && _.has(file, 'text')) {
          formData.append(key, JSON.stringify(file));
        } else {
          formData.append(key, file);
        }
      });
    } else {
      formData.append(key, data[key]);
    }
  });

  await api.post('/project', formData, { headers: { Authorization: token, 'content-type': 'multipart/form-data' } });
};

const deleteProject = slug => async (dispatch, getState, api) => {
  await api.delete(`/project/${slug}`, { headers: { Authorization: token } });

  const { projects } = _.cloneDeep(getState());
  const [removeItem] = _.remove(projects, o => o.slug === slug);
  dispatch({
    type: DELETE_PROJECT,
    payload: removeItem,
  });
};

export {
  fetchProject, fetchProjects, postProject, deleteProject,
};
