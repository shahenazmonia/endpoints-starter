const {sign, verify} = require('jsonwebtoken');
const {USER_COOKIE, secret} = require('../../../config.js');

export const setCookies = (res,token, user) =>{
  res.cookie(USER_COOKIE, user, {
    expires: new Date(Date.now() + 900000000000),
    signed: true
  });
  res.json({user,token});
};


export const signCookie = toBeSigned => new Promise((resolve, reject) => {
  sign(toBeSigned, secret, (err, token) => {
    if (err)
      reject(err);
    else
      resolve(token);
  });
});


export const verifyJWTToken = token => new Promise((resolve, reject) => {
  verify(token, secret, (err, decodedToken) => {
    if (err || !decodedToken)
      return reject(err);
    resolve(decodedToken);
  });
});
