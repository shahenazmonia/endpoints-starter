import express from 'express';
import {celebrate} from 'celebrate';
import {signupValidation} from './middleware/validation';
import {signup} from './Controllers/signup';
const router= express.Router();

module.exports = router
  .post('/api/signup', celebrate(signupValidation), signup);
