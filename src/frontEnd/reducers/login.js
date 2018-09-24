import {Login_Start, Login_Success, Login_Fail} from '../types';

const initialState = {
  isFetching: false,
  user: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case Login_Start:
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case Login_Success:
    return {
      ...state,
      isFetching: false,
      user: payload
    };
  case Login_Fail:
    return {
      ...state,
      isFetching: false,
      error: 'login error'
    };
  default:
    return state;
  }
};
