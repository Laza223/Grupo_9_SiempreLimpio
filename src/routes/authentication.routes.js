const express = require("express");
const router = express.Router();
const { login, procesoIniciar, logout, register, registerProcess} = require("../controllers/authentication");


// Login
router.get("/iniciar", login); 
router.post("/iniciar", procesoIniciar); 

// Registro
router.get("/registrar", register); 
router.post("/registrar", registerProcess)

//Cierre de sesión
router.get("/cerrar-sesion", logout)

module.exports = router;

