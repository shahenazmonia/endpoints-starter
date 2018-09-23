import express from 'express';
import {celebrate} from 'celebrate';
import {signupValidation} from './middleware/validation';
import {signup} from './Controllers/signup';
import {login} from './Controllers/login';

const router= express.Router();

module.exports = router
  .post('/api/signup', celebrate(signupValidation), signup)
  .post('/api/login', login);
