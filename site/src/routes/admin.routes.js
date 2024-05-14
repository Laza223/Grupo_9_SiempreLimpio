const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const { uploadProducts } = require("../middlewares/uploads");
const checkAdmin = require("../middlewares/checkAdmin")



// "/admin"

router.get("/dashboard/productos", checkAdmin, adminController.list); 

router.get("/dashboard/usuarios", adminController.userList);
router.get("/dashboard/usuarios/detalle/:id", adminController.userDetail)


router.get("/dashboard/editar/:id", adminController.edit);
router.put("/dashboard/editar/:id", adminController.update)

router.get("/dashboard/crear", adminController.create);
router.post("/dashboard/crear", uploadProducts.single("file", {name : "file"}), adminController.store);

router.get("/dashboard/eliminar/:id", adminController.delete);
router.delete("/dashboard/eliminar/:id", adminController.destroy);

router.put("/dashboard/restaurar/:id", adminController.restore)







module.exports = router;
  