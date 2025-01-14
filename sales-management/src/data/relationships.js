const Sales = require("../models/sales");
const SalesStatuses = require("../models/salesStatuses");

Sales.hasMany(require("./SalesStatuses"), { foreignKey: "saleId" });
SalesStatuses.belongsTo(require("./Sales"), { foreignKey: "saleId" });