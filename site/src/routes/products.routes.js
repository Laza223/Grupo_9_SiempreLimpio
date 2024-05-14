const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// /productos

/*router.get("/",productsController.list);*/

router.get('/detalle/:id', productsController.detail);
router.get('/categoria/:id', productsController.category);


module.exports = router;