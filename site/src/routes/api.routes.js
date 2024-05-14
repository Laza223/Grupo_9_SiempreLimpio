// /api

const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api");


router.get("/usuarios", apiController.userList)
router.get("/usuarios/:id", apiController.userDetail)

router.get('/productos', apiController.productList);
router.get('/productos/:id', apiController.productDetail);

module.exports = router;