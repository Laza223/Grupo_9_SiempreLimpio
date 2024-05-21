const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");

const { login, procesoIniciar, logout, register, registerProcess,loginAndRegister} = require("../controllers/authentication");
const { registerValidation, loginValidation } = require("../middlewares/validations");


router.get("/", loginAndRegister); 

router.post("/registrar", registerValidation, registerProcess );

router.post("/iniciar", loginValidation ,procesoIniciar); 

router.get("/cerrar-sesion", logout)

module.exports = router;

