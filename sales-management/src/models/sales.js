const sequelize = require("../../../common/db/dbConnection");
const {DataTypes} = require("sequelize");

const Sales = sequelize.define("sales",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    customerId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
});

module.exports = Sales;