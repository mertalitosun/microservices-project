const Sales = require("../models/sales");
const SalesStatuses = require("../models/salesStatuses");

Sales.hasMany(SalesStatuses, { foreignKey: "saleId" });
SalesStatuses.belongsTo(Sales, { foreignKey: "saleId" });