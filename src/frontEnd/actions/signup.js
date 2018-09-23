import {Signup_Start, Signup_Success, Signup_Fail} from '../types';
import handleErrors from '../handleErrors';

export const signupStart = () => {
  console.log('1');
  return {
    type: Signup_Start
  };
};

export const signupSuccess = (user) => {
  console.log('2');
  return {
    type: Signup_Success,
    payload: user
  };
};

export const signupFail = () => {
  console.log('3');
  return {
    type: Signup_Fail
  };
};

export const fetchUser = (user) => {
  console.log('user: ', user);
  return (dispatch) => {
    // const {users} =getState();
    // console.log('xxx', users);
    dispatch(signupStart());
    return fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((result) =>{
        console.log('res',result);
        if (!result && !result)
          // users.users.push({id: result.id, user: result});
          dispatch(signupSuccess(result));})
      .catch(() => dispatch(signupFail()));
  };
};
