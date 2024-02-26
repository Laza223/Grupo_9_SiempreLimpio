const express = require("express");
const router = express.Router();
const otherController = require("../controllers/other");
const productsController = require("../controllers/products");

// "/"
router.get("/", productsController.list)
router.get("/home",(req,res) => res.redirect("/"))


router.get("/sobre-nosotros", otherController.about)

module.exports = router