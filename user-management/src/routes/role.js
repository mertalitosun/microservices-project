const express = require("express");
const router = express.Router();

const roleController = require("../controllers/role");

router.get("/roles",roleController.get_roles);
router.post("/roles",roleController.create_roles);
router.delete("/roles/:roleId",roleController.delete_roles);
router.put("/roles/:roleId",roleController.update_roles);

module.exports = router;