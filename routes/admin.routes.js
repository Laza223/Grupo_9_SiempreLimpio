const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"


router.get("/dashboard", adminController.home); 

router.get("/editar",adminController.update);

router.get("/crear",adminController.create);


module.exports = router;
