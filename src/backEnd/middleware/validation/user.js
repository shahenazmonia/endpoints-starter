import Joi from 'joi';

export const signup = {
  body:{
    name: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
      .valid(Joi.ref('password')).options({
        language: {any: {allowOnly: '!!Passwords do not match'} }
      })
  }
};
