const Customers = require("../models/customers");
const Notes = require("../models/notes");

Customers.hasMany(Notes,{foreignKey:"customerId",onDelete:"CASCADE"});
Notes.belongsTo(Customers,{foreignKey:"customerId",onDelete:"CASCADE"});