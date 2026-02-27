const Sequelize = require('sequelize');

//database connection
const databaseCon = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '1234',
  database: 'studentdb',
  logging: true
});

module.exports = databaseCon;