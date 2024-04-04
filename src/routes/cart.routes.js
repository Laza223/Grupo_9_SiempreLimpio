const express = require("express");
const router = express.Router();
const path = require("path")
const cartController = require("../controllers/cart")

// "/carrito"    
router.get("/carrito",cartController.getCart)  


module.exports = router;