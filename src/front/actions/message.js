import _ from 'lodash';

import {
  MESSAGE_LIST, CURRENT_MESSAGE, DELETE_MESSAGE,
} from './type';
import { getUser } from '../services/localStorage';

const { token } = getUser();

const fetchMessages = () => async (dispatch, getState, api) => {
  const res = await api.get('/message', { headers: { Authorization: token } });
  dispatch({
    type: MESSAGE_LIST,
    payload: res.data.msg,
  });
};

const fetchMessage = (slug, cb) => async (dispatch, getState, api) => {
  const res = await api.get(`/message/${slug}`, { headers: { Authorization: token } });
  dispatch({
    type: CURRENT_MESSAGE,
    payload: res.data.msg,
  });
  cb();
};

const postMessage = data => (dispatch, getState, api) => {
  return api.post('/message', data, { headers: { Authorization: token } });
};

const deleteMessage = slug => async (dispatch, getState, api) => {
  await api.delete(`/message/${slug}`, { headers: { Authorization: token } });

  const { messages } = getState();
  const removeItem = _.remove(messages, o => o.slug === slug);
  dispatch({
    type: DELETE_MESSAGE,
    payload: removeItem,
  });
};

export {
  fetchMessage, fetchMessages, postMessage, deleteMessage,
};
