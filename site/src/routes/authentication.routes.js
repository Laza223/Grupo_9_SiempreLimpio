const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const { login, procesoIniciar, logout, register, registerProcess} = require("../controllers/authentication");
const { registerValidation, loginValidation } = require("../middlewares/validations");


// "/autenticacion"
//Falta agregar validaciones

// Login
router.get("/iniciar", login); 
router.post("/iniciar", loginValidation ,procesoIniciar); 

// Registro  


router.get("/registrar", register); 

router.post("/registrar", registerValidation, registerProcess );



//Cierre de sesión
router.get("/cerrar-sesion", logout)

module.exports = router;

