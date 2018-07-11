import { combineReducers } from 'redux';

const moviesData = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return [...state, action.movies]
      break;
    default:
      return state;
  }
}

export default moviesData;