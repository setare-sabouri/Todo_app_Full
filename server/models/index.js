
const Sequelize = require('sequelize');
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_URL, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_URL,
    port: DB_PORT,
    dialect: 'postgres',
});

module.exports = sequelize
