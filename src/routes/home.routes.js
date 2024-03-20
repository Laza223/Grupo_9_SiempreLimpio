const express = require("express");
const router = express.Router();

const homeController = require("../controllers/other");

// "/"
router.get("/", homeController.home)
router.get("/home",(req,res) => res.redirect("/"))

module.exports = router