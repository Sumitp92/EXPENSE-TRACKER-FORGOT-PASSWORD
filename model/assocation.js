const sequelize = require('../util/databases');
const NewRec = require('./auth'); 
const Expense = require('./expenses'); 
const Order = require('./order'); 

NewRec.hasMany(Expense, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    as: 'expenses', 
});

Expense.belongsTo(NewRec, {
    foreignKey: 'userId',
    as: 'user', 
});

NewRec.hasMany(Order, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    as: 'orders',  
});

Order.belongsTo(NewRec, {
    foreignKey: 'userId',
    as: 'user',  
});

module.exports = {
    NewRec,
    Expense,
    Order,
};