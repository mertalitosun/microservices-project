const path = require("path")
const rootDir = path.resolve(__dirname,"../");
const sequelize = require(path.join(rootDir, '/db/dbConnection'));
const {DataTypes} = require("sequelize");
const Customers = sequelize.define("customer",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    surname:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    company:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = Customers