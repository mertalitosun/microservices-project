const express = require("express");
const router = express.Router();

const salesController = require("../controllers/sales");

router.patch("/sales/:saleId",salesController.update_sales);
router.get("/sales/:customerId",salesController.get_sales_customer_byId);
router.post("/sales",salesController.create_sales);
router.get("/sales",salesController.get_sales);

module.exports = router;