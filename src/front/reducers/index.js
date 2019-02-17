import { combineReducers } from 'redux';
import User from './user';
import Projects from './projects';

const rootReducer = combineReducers({
  user: User,
  projects: Projects,
});

export default rootReducer;
