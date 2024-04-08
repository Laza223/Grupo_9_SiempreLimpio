const { body } = require("express-validator");
const { loadData } = require("../database");
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

module.exports = () => {
  const fieldEmailDefault = body("email")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail()
    .isEmail()
    .withMessage("Formato invalido")
    .bail();

  const fieldPasswordDefault = body("password")
    .notEmpty()
    .withMessage("Campo requerido")
    .bail();

  const fieldEmailRegister = fieldEmailDefault.custom((value, { req }) => {
    const users = loadData("users");
    const existUser = users.find((u) => u.email === value.trim());

    if (existUser) {
      throw new Error("Ya existe un usuario registrado con ese email");
    }

    return true;
  });

  const fieldPasswordRegister = fieldPasswordDefault
    .isLength({ min: 8, max: 16 })
    .withMessage("Longitud invalida")
    .bail()
    .matches(regExPass)
    .withMessage("La contraseña es invalida");

  const fieldPasswordLogin = fieldPasswordDefault.custom((value, { req }) => {});

  return {
    fieldEmailDefault,
    fieldPasswordDefault,
    fieldEmailRegister,
    fieldPasswordRegister,
    fieldPasswordLogin
  };
};


