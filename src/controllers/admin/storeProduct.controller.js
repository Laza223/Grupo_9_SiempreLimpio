const path = require("path")
let products = require("../../database/products.json");
const fs = require("fs");
const {validationResult}=require("express-validator");

const db=require("../../db/models")

module.exports = (req, res) => {
const errors=validationResult(req);
if (errors.isEmpty()){
const { nombre, precio, descripcion, categoria, disponible,stock } = req.body;

  db.product.create({
    nombre:nombre.trim(),
    precio: +precio,
    descripcion:descripcion.trim(),
    imagen:req.files.imagen?.length ? req.files.imagen[0]?.filename:
    "not-image.png",
    categoriaId:+categoria,
    stock: +stock,
    disponible:disponible==="on"

  })
  .then((product)=>{
    return res.redirect("/admin/product")

  })
  .catch(err => {
    res.send(err.message)
})

  }
  return res.redirect("/admin/product")
};
  /*const newId = products[products.length - 1].id + 1;*/
  /* const newProduct = {
    id: newId,
    nombre:nombre.trim(),
    precio: +precio,
    descripcion:descripcion.trim,
    imagen: "not-image.png",
    categoria: categoria?.trim(),
    stock: +stock,
    disponible:disponible==="on"
  };
  products = [...products, newProduct];

  products = JSON.stringify(products, null, 3);
  const pathProducts = path.join(__dirname, "../../database/products.json");
  fs.writeFileSync(pathProducts, products, "utf-8")*/
