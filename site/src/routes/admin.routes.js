const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");
const checkAdmin = require("../middlewares/checkAdmin");
const {productsValidation} = require("../middlewares/validations")



// "/admin"

router.get("/dashboard/productos",  adminController.list); 

router.get("/dashboard/usuarios", adminController.userList);
router.get("/dashboard/usuarios/:id", adminController.userDetail)
router.put("/dashboard/usuarios/:id", adminController.userEdit)

router.get("/dashboard/editar/:id",  adminController.edit);
router.put("/dashboard/editar/:id", uploadProducts.single( "imageProduct"), productsValidation,  adminController.update)

router.get("/dashboard/crear", adminController.create);
router.post("/dashboard/crear",uploadProducts.single( "imageProduct"), productsValidation,   adminController.store);

router.get("/dashboard/eliminar/:id", adminController.delete);
router.delete("/dashboard/eliminar/:id", adminController.destroy);

router.put("/dashboard/restaurar/:id", adminController.restore)







module.exports = router;
  