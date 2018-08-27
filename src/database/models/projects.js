const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Projects = sequelize.define('projects',{
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  start_date : {
    type: Sequelize.DATE(3),
    allowNull: true
  },
  end_date : {
    type: Sequelize.DATE(3),
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

module.exports = Projects;
