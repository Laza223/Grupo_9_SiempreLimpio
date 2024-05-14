const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const {uploadUser} = require("../middlewares/uploads")

// /perfil

router.get("/", userController.profile)


router.get("/editar", userController.edit)
router.put("/editar", uploadUser.single("avatar", {name : "avatar"}), userController.update)




module.exports = router