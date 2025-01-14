const sequelize = require("../../../common/db/dbConnection");
const {DataTypes} = require("sequelize");

const SalesStatuses = sequelize.define("salesStatuses",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    status: {
        type: DataTypes.ENUM('Yeni', 'İletişimde', 'Anlaşma', 'Kapandı'),
        allowNull: false
    },
    statusChangeDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, 
        allowNull: false
    },
    note:{
        type:DataTypes.TEXT,
        allowNull: true
    }
});

module.exports = SalesStatuses;