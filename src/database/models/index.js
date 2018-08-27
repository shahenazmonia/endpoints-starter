const Users = require('./users');
const Projects = require('./projects');
const Endpoints = require('./endpoints');
const Notes = require('./notes');
const sequelize = require('../config/connection');

Projects.belongsTo(Users, {
  onDelete: 'CASCADE', forignKey: 'user_id', targetKey: 'id'
});

Endpoints.belongsTo(Projects, {
  onDelete: 'CASCADE', forignKey: 'project_id', targetKey: 'id'
});

Notes.belongsTo(Projects, {
  onDelete: 'CASCADE', forignKey: 'project_id', targetKey: 'id'
});

// export default new Promise((resolve, reject) => {
//   sequelize.sync().then(() => {
//     resolve();
//   }).catch((err) => {reject(err);});
// });

module.exports ={

  sequelize: new Promise((resolve, reject) => {
    sequelize.sync().then(() => {
      resolve();
    }).catch((err) => {reject(err);});
  }),

  Users,
  Projects,
  Endpoints,
  Notes,
};
