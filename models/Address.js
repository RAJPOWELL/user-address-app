const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

// Define the Address model
const Address = sequelize.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// Create a One-to-Many relationship between User and Address
User.hasMany(Address, { onDelete: 'CASCADE' });
Address.belongsTo(User);

module.exports = Address;
