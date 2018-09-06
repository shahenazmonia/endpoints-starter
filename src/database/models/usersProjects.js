import Sequelize from 'sequelize';
import sequelize from '../config/connection';

const UsersProjects = sequelize.define('users_projects', {
  role: {
    type: Sequelize.STRING,
  },
  created_at:{
    type: Sequelize.DATE(3),
    defaultValue: sequelize.literal('NOW()'),
  },
  updated_at: {
    type: Sequelize.DATE(3),
    defaultValue: sequelize.literal('NOW()'),
  }
});

module.exports = UsersProjects;
