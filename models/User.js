const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the User model
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = User;
