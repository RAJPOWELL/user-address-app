const { Sequelize } = require('sequelize');

// Initialize a new Sequelize instance for SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // SQLite file will be stored here
});

module.exports = sequelize;
