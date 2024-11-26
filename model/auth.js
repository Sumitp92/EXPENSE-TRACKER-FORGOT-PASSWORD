const Sequelize = require('sequelize');
const sequelize = require('../util/databases');

const NewRec = sequelize.define('authtable', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false, 
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    isPremium: { 
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'authtable', 
    timestamps: true,
});

NewRec.associate = (models) => {
    NewRec.hasMany(models.Expense, {
        foreignKey: 'userId', 
        onDelete: 'CASCADE',   
    });
};

module.exports = NewRec;
