const Sequelize = require('sequelize');
const {DB_CONFIG} = require('../../../config');

const {
  dbName, username, password, dialect, host
} = DB_CONFIG;

const {Op} = Sequelize;
const operatorsAliases = {
  $eq: Op.eq,
  $not: Op.not,
  $in: Op.in,
  $and: Op.and,
  $or: Op.or,
  $contains: Op.contains,
  $col: Op.col,
  $any: Op.any,
  $like: Op.like,
  $between: Op.between


};

module.exports = new Sequelize(dbName, username, password, {
  host,
  dialect,
  operatorsAliases,
  logging: false,
  define: {
    underscored: true,
  }
});
