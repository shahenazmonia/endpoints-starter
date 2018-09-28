const initialState = {
  isFetching: false,
  user: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case 'loginStart':
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case 'loginSuccess':
    return {
      ...state,
      isFetching: false,
      user: payload
    };
  case 'loginFail':
    return {
      ...state,
      isFetching: false,
      error: 'Sorry, You have not  an authorize'
    };
  default:
    return state;
  }
};
