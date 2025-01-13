const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/users",userController.get_users);
router.get("/users/:userId",userController.get_user_byId);
router.post("/users",userController.create_users);
router.patch("/users/:userId",userController.update_user);
router.delete("/users/:userId",userController.delete_user);
module.exports = router;