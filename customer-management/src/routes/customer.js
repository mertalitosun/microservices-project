const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer");
const {isAuth,isAdmin} = require("../../../common/middlewares/auth");

router.delete("/customers/:customerId",isAuth,isAdmin,customerController.delete_customers);
router.get("/customers/:customerId",isAuth,isAdmin,customerController.get_customer_byId);
router.patch("/customers/:customerId",isAuth,isAdmin,customerController.update_customers);
router.post("/customers",isAuth,isAdmin,customerController.create_customers);
router.get("/customers",isAuth,isAdmin,customerController.get_customers);

module.exports = router;