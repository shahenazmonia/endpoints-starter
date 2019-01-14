const express = require('express');
const app= express();
const  {DB_CONFIG} = require('../../config');
const  {sequelize} = require('../database/models/');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = require('./router');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieParser('secret'));
app.use(router);

sequelize
  .then(() => {
    app.listen(DB_CONFIG.PORT, () => {
    // eslint-disable-next-line
    console.log(`Our app is running on http://localhost:${DB_CONFIG.PORT}`);
    });
  })
  // eslint-disable-next-line
  .catch((e) => console.warn(e));
