import {Users} from '../../database/models';
import comparedPassword from '../utils/comparePassword';
import {setCookies, signCookie} from '../utils/cookies';

export const login = (req,res) =>{
  const {body:{username, password} } = req;
  let user;
  Users.findOne({where:{username} })
    .then((userData)=>{
      if(!userData)
        return res.status(401).json({err: 'your email or password is wrong'});
      user=userData;
      const hashPassword = user.password;
      return comparedPassword(password, hashPassword)
        .then((successPassword)=>{
          if(!successPassword){
            res.status(401).json({err: 'password not match'});
          }else {
            const cookieInfo = {
              username,
              isLoggedIn: true,
              id: user.id
            };
            return signCookie(cookieInfo);
          }
        }).then((token)=>{
          if(!token)
            return res.status(401).json({err: 'error'});
          delete user.dataValues.password;
          setCookies(res,token,user);
        });

    });

};
