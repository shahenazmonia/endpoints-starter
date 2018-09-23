import signup from './signup';
import {combineReducers} from 'redux';

export default combineReducers({
  user: signup,
});
