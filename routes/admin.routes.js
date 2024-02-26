const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"


router.get("/dashboard", adminController.home); 

module.exports = router;
