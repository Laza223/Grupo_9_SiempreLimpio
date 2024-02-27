const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"


router.get("/dashboard", adminController.home); 

router.get("/dashboard/editar",adminController.update);

router.get("/dashboard/editar:id",adminController.update);

router.get("/dashboard/crear",adminController.create);


module.exports = router;
