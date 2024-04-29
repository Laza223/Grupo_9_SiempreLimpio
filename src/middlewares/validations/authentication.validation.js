const { body, validationResult } = require("express-validator");
const { loadData } = require("../../database");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;


    const fieldName = body("name")
    .notEmpty().withMessage("Campo requerido");

    const fieldSurname = body("surname")
    .notEmpty().withMessage("Campo requerido");
    
    const fieldEmail = body("email")
        .notEmpty().withMessage("Campo requerido").bail()
        .isEmail().withMessage("Formato invalido").bail()
        .custom((value, { req }) => {
            const users = loadData("users");
            const existUser = users.find((u) => u.email === value.trim());
            if (existUser) {
                throw new Error("Ya existe un usuario registrado con ese email");
            }
            return true;
        });

    const fieldPassword = body("password")
        .notEmpty().withMessage("Campo requerido").bail()
        .isLength({ min: 8, max: 16 }).withMessage("Longitud invalida").bail()
        .matches(regExPass).withMessage("La contraseña debe contener al menos una letra minúscula y una letra mayúscula, un dígito y no tener espacios en blanco 🤠");

module.exports = {
    registerValidation: [fieldName, fieldSurname, fieldEmail, fieldPassword]
}