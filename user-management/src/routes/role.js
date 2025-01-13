const express = require("express");
const router = express.Router();

const roleController = require("../controllers/role");
const {isAuth, isAdmin} = require("../../../common/middlewares/auth");

router.get("/roles",isAuth,isAdmin,roleController.get_roles);
router.post("/roles",isAuth,isAdmin,roleController.create_roles);
router.delete("/roles/:roleId",isAuth,isAdmin,roleController.delete_roles);
router.put("/roles/:roleId",isAuth,isAdmin,roleController.update_roles);

module.exports = router;