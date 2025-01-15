const Users = require("../models/users");
const Roles = require("../models/roles");

Users.belongsToMany(Roles, { through: 'userRoles'});
Roles.belongsToMany(Users, { through: 'userRoles'});