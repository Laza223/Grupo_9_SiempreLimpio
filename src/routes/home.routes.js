const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

// "/"
router.get("/", productsController.list)
router.get("/home",(req,res) => res.redirect("/"))




module.exports = router