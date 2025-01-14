const express = require("express");
const router = express.Router();

const salesController = require("../controllers/sales");
const {isAuth,isSales} = require ("../../../common/middlewares/auth");

router.patch("/sales/:saleId",isAuth,isSales,salesController.update_sales);
router.get("/sales/:customerId",isAuth,isSales,salesController.get_sales_customer_byId);
router.post("/sales",isAuth,isSales,salesController.create_sales);
router.get("/sales",isAuth,isSales,salesController.get_sales);

module.exports = router;