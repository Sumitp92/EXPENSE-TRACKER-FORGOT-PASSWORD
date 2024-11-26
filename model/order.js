const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../util/databases'); 

const Order = sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    paymentId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'success', 'failed'),
        allowNull: false,
        defaultValue: 'pending',
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'orders',
});

module.exports = Order; 