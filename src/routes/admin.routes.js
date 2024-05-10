const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
const admin = require("../controllers/admin");

// "/admin"

router.get("/dashboard/productos", adminController.list); 
router.get("/dashboard/usuarios", adminController.listUsers);


router.get("/dashboard/editar/:id", adminController.edit);
router.put("/dashboard/editar/:id", adminController.update)

router.get("/dashboard/crear", adminController.create);
router.post("/dashboard/crear", adminController.store);

router.get("/dashboard/eliminar/:id", adminController.delete);
router.delete("/dashboard/eliminar/:id", adminController.destroy);

router.put("/dashboard/restaurar/:id", adminController.restore)







module.exports = router;
  