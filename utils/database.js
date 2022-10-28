const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testing', 'root', 'goesgoes2', {
    dialect: 'mysql',
    host: 'localhost',
});

module.exports = sequelize;
