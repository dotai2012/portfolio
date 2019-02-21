import { MESSAGE_LIST, DELETE_MESSAGE, CURRENT_MESSAGE } from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case MESSAGE_LIST:
      return action.payload;
    case CURRENT_MESSAGE:
      return [action.payload];
    case DELETE_MESSAGE:
      return [...state.filter(o => o.slug === action.payload.slug)];
    default:
      return state;
  }
}
