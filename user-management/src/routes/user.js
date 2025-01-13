const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const {isAuth, isAdmin} = require("../../../common/middlewares/auth");

router.get("/users",isAuth,userController.get_users);
router.get("/users/:userId",isAuth,userController.get_user_byId);
router.post("/users",isAuth,userController.create_users);
router.patch("/users/:userId",isAuth,userController.update_user);
router.delete("/users/:userId",isAuth,userController.delete_user);
module.exports = router;