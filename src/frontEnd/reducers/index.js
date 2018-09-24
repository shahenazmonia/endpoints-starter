import signup from './signup';
import login from './login';
import {combineReducers} from 'redux';

export default combineReducers({
  user: signup,
  userLogin: login
});
