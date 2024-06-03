const { check, body } = require("express-validator");
const db = require("../../db/models")

const fieldName = check("name")
    .notEmpty()
    .withMessage("Se requiere un título")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("El titulo debe tener entre 5 y 100 caracteres");

const fieldPrice = check("price")
    .notEmpty()
    .withMessage("El campo debe incluir un número")
    .bail()
    .isNumeric()
    .withMessage("El campo debe incluir un número")
    .bail()
    .isDecimal()
    .withMessage("El número debe incluir decimales");

const fieldStock = check("stock")
    .notEmpty()
    .withMessage("El campo debe incluir un número")
    .bail()
    .isNumeric()
    .withMessage("El campo debe incluir un número")
    .bail()
    .isDecimal()
    .withMessage("El número debe incluir decimales");

const fieldDescription = check("description")
    .notEmpty()
    .withMessage("La descripción es requerido")
    .bail()
    .isAlphanumeric("es-ES", { ignore: " .," })
    .withMessage("La descripción debe ser alfanumerico")
    .bail()
    .isLength({ min: 30, max: 500 })
    .withMessage(
        "La descripción debe tener un minimo de 30 y un maximo de 500 caracteres"
    );

    const fieldCategory = body("category")
    .notEmpty().withMessage("Campo requerido")
    .bail()
    .custom(async (value, { req }) => {
        try {
            const categoryFind = await db.Category.findOne({
                where: { id: value } 
            });
            
            if (!categoryFind) { 
                throw new Error("Categoría no existe");
            }
        } catch (error) {
            throw new Error(error.message || "Error de validación de categoría");
        }
    });



module.exports = {
    productsValidation: [
        fieldName,
        fieldPrice,
        fieldDescription,
        fieldStock,
        fieldCategory
    ]
};