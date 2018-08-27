const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Notes = sequelize.define('notes',{
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  note: {
    type: Sequelize.TEXT,
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

module.exports = Notes;
