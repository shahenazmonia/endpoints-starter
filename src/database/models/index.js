const Users = require('./users');
const Projects = require('./projects');
const Endpoints = require('./endpoints');
const Notes = require('./notes');
const UsersProjects = require('./usersProjects');
const Sequelize = require('../config/connection');

Projects.belongsTo(Users, {
  onDelete: 'CASCADE', forignKey: 'user_id', targetKey: 'id'
});

Endpoints.belongsTo(Projects, {
  onDelete: 'CASCADE', forignKey: 'project_id', targetKey: 'id'
});

UsersProjects.belongsTo(Users, {
  onDelete: 'CASCADE', forignKey: 'user_id', targetKey: 'id'
});

UsersProjects.belongsTo(Projects, {
  onDelete: 'CASCADE', forignKey: 'project_id', targetKey: 'id'
});

Notes.belongsTo(Projects, {
  onDelete: 'CASCADE', forignKey: 'project_id', targetKey: 'id'
});

const seq = new Promise((resolve, reject) => {
  Sequelize.sync().then(() => {
    resolve();
  }).catch((err) => {reject(err);});
});

module.exports ={

  sequelize:seq,
  Sequelize,
  Users,
  Projects,
  Endpoints,
  Notes,
  UsersProjects
};
