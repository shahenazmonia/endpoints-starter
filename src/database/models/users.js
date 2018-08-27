const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Users = sequelize.define('users',{
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role : {
    type: Sequelize.STRING,
    allowNull: true
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  created_at : {
    type: Sequelize.DATE(3),
    defaultValue: sequelize.literal('NOW()'),
  },
  updated_at : {
    type: Sequelize.DATE(3),
    defaultValue: sequelize.literal('NOW()'),
  }

});

module.exports = Users;
