import { combineReducers } from 'redux';
import moviesData from './moviesData';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  moviesData,
  user: userReducer
}); 

export default rootReducer;