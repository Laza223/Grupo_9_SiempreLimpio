const express = require("express");
const router = express.Router();
const { login, procesoIniciar, register } = require("../controllers/authentication");

// app.js --> "/autenticacion"


//  /autenticacion/iniciar
router.get("/iniciar", login); 
router.post("/iniciar", procesoIniciar); 

//  /autenticacion/registrar
router.get("/registrar", register); 

module.exports = router;
