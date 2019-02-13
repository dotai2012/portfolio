import { CURRENT_USER } from '../actions/type';
import { getUser } from '../services/localStorage';

const initialState = JSON.parse(getUser().user);

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload;
    default:
      return state;
  }
}
