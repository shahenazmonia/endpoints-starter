const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Endpoints = sequelize.define('endpoints',{
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  route: {
    type: Sequelize.STRING,
    allowNull: true
  },
  type : {
    type: Sequelize.STRING,
    allowNull: true
  },
  type_desc : {
    type: Sequelize.STRING,
    allowNull: true
  },
  response_status : {
    type: Sequelize.STRING,
    allowNull: true
  },
  response_msg : {
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

module.exports = Endpoints;
