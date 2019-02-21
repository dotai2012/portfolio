import { combineReducers } from 'redux';
import User from './user';
import Projects from './projects';
import Messages from './messages';

const rootReducer = combineReducers({
  user: User,
  projects: Projects,
  messages: Messages,
});

export default rootReducer;
