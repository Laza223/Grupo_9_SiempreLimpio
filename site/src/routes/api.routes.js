const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");
const renderImgController = require('../controllers/api/products/renderImg.controller')


// /api
router.get("/users", apiController.userList)
router.get("/usuarios/:id", apiController.userDetail)

router.get('/products', apiController.productList);
router.get('/products/:id', apiController.productDetail);

router.get('/products/image/:image', renderImgController)

module.exports = router;