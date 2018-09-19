import {Signup_Start, Signup_Success, Signup_Fail} from '../types';

const initialState = {
  isFetching: false,
  user: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  console.log('aaa',payload);
  switch (type) {
  case Signup_Start:
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case Signup_Success:
    return {
      ...state,
      isFetching: false,
      user: payload
    };
  case Signup_Fail:
    return {
      ...state,
      isFetching: false,
      error: 'signup error'
    };
  default:
    return state;
  }
};
