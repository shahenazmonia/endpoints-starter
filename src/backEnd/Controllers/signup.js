import {Sequelize, Users} from '../../database/models';
import hashPassword from '../utils/hashPassword';
export const signup = (req, res) =>{
  const {body: {username, password} } = req;

  Users.findOne({where: {username} })
    .then((result)=>{
      if(result)
        return res.status(200).json({msg: 'the user already exists'});
      return Sequelize.transaction((t)=>{
        return hashPassword(password)
          .then((hashedPassword)=>{
            return  Users.create({
              username,
              password: hashedPassword,
            }, {transaction: t})
              .then((user)=>{
                delete user.dataValues.password;
                return res.status(200).json(user);
              })
              .catch(()=>{
                t.rollback();
              });
          },{transaction: t})
          .catch(()=>{
            t.rollback();
          });
      }).catch(()=>{
        return res.status(500).json({err: 'error in the query'});
      });
    });
};
