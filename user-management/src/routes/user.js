const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const {isAuth, isAdmin} = require("../../../common/middlewares/auth");

router.get("/users/:userId",isAuth,isAdmin,userController.get_user_byId);
router.patch("/users/:userId",isAuth,isAdmin,userController.update_user);
router.delete("/users/:userId",isAuth,isAdmin,userController.delete_user);
router.post("/users",isAuth,isAdmin,userController.create_users);
router.get("/users",isAuth,isAdmin,userController.get_users);
module.exports = router;