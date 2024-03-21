const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// "/admin"

router.get("/dashboard", adminController.home); 

router.get("/dashboard/listado", adminController.list);


router.get("/dashboard/editar/:id", adminController.edit);

router.put("/dashboard/editar/:id", adminController.update)
///admin/dashboard/editar/1?_method=PUT

router.get("/dashboard/crear", adminController.create);

router.post("/dashboard/crear", adminController.store);





module.exports = router;
  