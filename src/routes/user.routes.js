const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");


router.get("/editar", userController.user)




module.exports = router