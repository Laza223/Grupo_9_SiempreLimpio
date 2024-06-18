const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");
const multer = require('multer')
const renderImgController = require('../controllers/api/products/renderImg.controller')


const upload = multer()

// /api
router.get("/users", apiController.userList)
router.get("/usuarios/:id", apiController.userDetail)

router.get('/products', apiController.productList);
router.get('/products/:id', apiController.productDetail);

router.post('/products/edit', upload.none(),apiController.editProduct)

router.get('/categorys', apiController.categorysList)

router.get('/products/image/:image', renderImgController)

module.exports = router;