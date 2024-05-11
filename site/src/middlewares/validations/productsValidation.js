const { body,validationResult} = require("express-validator");
const { loadData } = require("../../database");


const fieldNombre= body('nombre')
.notEmpty()
.withMessage("El campo nombre es requerido")
.bail()
.isLength({ min: 5, max: 100})
.withMessage('Debe tener un minimo de 5 y maxímo 100 caracteres');

const fieldPrecio = body('Precio')
.notEmpty()
.withMessage('El campo Rating es requerido')
.bail()
.isDecimal()
.withMessage("El valor debe ser decimal");

const fieldStock = body('stock')
.notEmpty()
.withMessage('El campo stock es requerido')
.bail()
.isNumeric()
.withMessage('El valor debe ser numérico');

const fieldCategory =  body('categoria')
.notEmpty()
.withMessage('El campo Release Date es requerido')

const field = body('length')
.notEmpty()
.withMessage('El campo Length es requerido')
.bail()
.isNumeric()
.withMessage('El valor tiene que ser numérico');
