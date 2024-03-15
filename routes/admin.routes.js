const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"


router.get("/dashboard", adminController.home); 

router.get("/dashboard/editar",adminController.update);

router.get("/dashboard/editar:id",adminController.update);

router.get("/dashboard/createProduct",adminController.create);
router.post("/dashboard/createProduct", adminController.store);


router.get("/dashboard/formularioDeCarga",adminController.formularioDeCarga);


module.exports = router;
  