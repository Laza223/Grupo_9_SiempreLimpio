const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api/products");
const multer = require('multer')
const renderImgController = require('../controllers/api/renderImg.controller')
const { uploadProducts } = require('../middlewares/uploads');


const upload = multer()

// api
router.get("/users", apiController.userList)
router.get("/usuarios/:id", apiController.userDetail)

router.get('/products', apiController.productList);
router.get('/products/:id', apiController.productDetail);

router.post('/products/edit', uploadProducts.single("imageProduct"),apiController.editProduct)

router.post('/products/create', uploadProducts.single("imageProduct"), apiController.createProduct)

router.delete('/products/:id', apiController.deleteProduct);

router.get('/categorys', apiController.categorysList)

router.get('/products/image/:image', renderImgController)

module.exports = router;