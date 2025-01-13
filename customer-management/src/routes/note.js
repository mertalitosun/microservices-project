const express = require("express");
const router = express.Router();

const noteController = require("../controllers/note");
const {isAuth,isAdmin} = require("../../../common/middlewares/auth");

router.patch("/notes/:noteId",isAuth,isAdmin,noteController.update_note);
router.delete("/notes/:noteId",isAuth,isAdmin,noteController.delete_note);
router.get("/notes/:noteId",isAuth,isAdmin,noteController.get_note_byId);
router.post("/notes/:customerId",isAuth,isAdmin,noteController.create_note);
module.exports = router;