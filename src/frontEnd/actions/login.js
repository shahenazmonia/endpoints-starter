import {Login_Start, Login_Success, Login_Fail} from '../types';

const loginStart = () =>{
  return({
    type: Login_Start
  });
};

const loginSuccess = (user) =>{
  return({
    type: Login_Success,
    payload: user
  });
};

const loginFail = () =>{
  return({
    type: Login_Fail
  });
};

export const login = (user) =>{
  return(dispatch) =>{
    dispatch(loginStart);
    return fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      }
    }).then((res)=>{
      return res.json();
    }).then((result)=>{
      dispatch(loginSuccess(result));
    }).catch(()=>{
      dispatch(loginFail);
    });
  };
};
