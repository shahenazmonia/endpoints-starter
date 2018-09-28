import {Users} from '../../database/models/';
const fetch = require('node-fetch');
var request = require('request');

const auth = () =>{
  const session_code = request.env['rack.request.query_hash']['code'];
  return fetch('https://github.com/login/oauth/access_token',
    {client_secret :'753a1ce65ba92a0165f10daeaeb8b646d40e1a3f',
      code:session_code}
  )
    .then((result=>result.json()))
    .then((data)=>{
      if(data)
        return data;
      return console.error('error');
    });


};

const checkCookies = (res, user) =>{
  res.cookie('user_id', user.id, {
    expires: new Date(Date.now() + 900000000000),
    signed: true
  });
  res.json(user);
};

export const login = (req, res)=>{
  const {body: {username, password} } = req;
  return auth()
    .then((result)=>{
      // return res.json(result);
      const avatar = result['avatar_url'];
      Users.findOne({where : {username} })
        .then((user)=>{
          if(!user){
            return  Users.create({
              username,
              password: '1111',
              image: avatar,
            }).then((newUser)=>{
              checkCookies(res, newUser);
              // res.json(newUser);
            });
          }
          checkCookies(res, user);
          // res.json(user);
        });
    });

};
