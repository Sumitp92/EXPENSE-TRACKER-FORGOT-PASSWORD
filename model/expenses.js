const Sequelize = require('sequelize');
const sequelize = require('../util/databases');

const Expense = sequelize.define('expensetable', {
    amount: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    totalexpense: {
       type : Sequelize.INTEGER ,
       allowNull : true , 
    }, 
    userId: { 
        type: Sequelize.INTEGER,
        references: {
            model: 'authtable', 
            key: 'id' 
        },
        allowNull: false,
        onDelete: 'CASCADE',  
        onUpdate: 'CASCADE',  
    }
}, {
    tableName: 'expensetable',
    timestamps: true
});

Expense.associate = (models) => {
    Expense.belongsTo(models.NewRec, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
    });
};

module.exports = Expense;
