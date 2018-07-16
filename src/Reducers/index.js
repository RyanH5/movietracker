import { combineReducers } from 'redux';
import moviesData from './moviesData';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  moviesData,
  user: userReducer
}); 

export default rootReducer;