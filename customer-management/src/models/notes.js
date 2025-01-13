const sequelize = require("../../../common/db/dbConnection");
const {DataTypes} = require("sequelize");

const Notes = sequelize.define("notes",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    content:{
        type:DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Notes