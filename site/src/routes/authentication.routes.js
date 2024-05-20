const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const { login, procesoIniciar, logout, register, registerProcess,loginAndRegister} = require("../controllers/authentication");
const { registerValidation, loginValidation } = require("../middlewares/validations");


// "/authentication"
//Falta agregar validaciones

// Nuevo Login-Register
router.get("/", loginAndRegister); 


router.post("/registrar", registerValidation, registerProcess );




// Login
router.get("/iniciar", login); 
router.post("/iniciar", loginValidation ,procesoIniciar); 

// Registro  


router.get("/registrar", register); 




//Cierre de sesión
router.get("/cerrar-sesion", logout)

module.exports = router;

