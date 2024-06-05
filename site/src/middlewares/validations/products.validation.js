const { check, body } = require("express-validator");
const { Category } = require("../../db/models")

const fieldTitle = body("name")
    .notEmpty()
    .withMessage("El titulo es requerido")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," })
    .withMessage("El titulo debe ser alfanumerico")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("El titulo debe tener un minimo de 5 caracteres");

const fieldPrice = body("price")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()
    .isNumeric()
    .withMessage("El campo debe incluir un número decimal")
    .bail()
    .isDecimal()
    .withMessage("El campo debe incluir un número decimal");

const fieldStock = body("stock")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()
    .isNumeric()
    .withMessage("El campo debe incluir un número decimal")
    .bail()
    .isDecimal()
    .withMessage("El campo debe incluir un número decimal");

const fieldDescription = body("description")
    .notEmpty()
    .withMessage("El campo es requerido")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," })
    .withMessage("El campo debe incluir caracteres alfanuméricos")
    .bail()
    .isLength({ min: 30, max: 500 })
    .withMessage("El campo debe incluir un mínimo de 30 y un máximo de 500 caracteres");

const fieldCategory = body("category")
    .notEmpty()
    .withMessage("Debe seleccionar una categoría")
    .bail()
    .custom(async (value) => {
        const category = await Category.findByPk(value);
        if (!category) {
            throw new Error("La categoría seleccionada no existe");
        }
    });

const fieldFile = body("imageProduct")
    .notEmpty().withMessage("Debe seleccionar una imagen")


module.exports = {
    productsValidation: [
        fieldTitle,
        fieldPrice,
        fieldStock,
        fieldDescription,
        fieldCategory,
        fieldFile
    ]
};