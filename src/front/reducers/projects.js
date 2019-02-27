import { PROJECT_LIST, DELETE_PROJECT, CURRENT_PROJECT } from '../actions/type';

export default function (state = [], action) {
  switch (action.type) {
    case PROJECT_LIST:
      return action.payload;
    case CURRENT_PROJECT:
      return [action.payload];
    case DELETE_PROJECT:
      return [...state.filter(o => o.slug !== action.payload.slug)];
    default:
      return state;
  }
}
