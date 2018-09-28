const handleErrors= (response) => {
  if (response.status >= 400) {
    throw new Error('Error!');
  } else {
    return response.json();
  }
};


export const loginStart = () => {
  return {
    type: 'loginStart'
  };
};

export const loginSuccess = (user) => {
  return {
    type: 'loginSuccess',
    payload: user
  };
};

export const loginFail = () => {
  return {
    type: 'loginFail'
  };
};

export const login = (user) => {
  console.log('user', user);
  return (dispatch) => {
    dispatch(loginStart());

    return fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      }
    })
      .then(handleErrors)
      .then(result => dispatch(loginSuccess(result)))
      .catch(() => dispatch(loginFail()));
  };
};
