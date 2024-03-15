const path = require("path")
// 1° traer todos los productos existentes en mi base de datos.
let products = require("../../database/products.json");
const fs = require("fs");

module.exports = (req, res) => {

  // 2° obtener los valores que el usuario me manda por el body
  const { nombre, precio, descripcion, categoria, disponible,stock } = req.body;

  // 3° crear el ID del nuevo producto
  const newId = products[products.length - 1].id + 1;

  // 4° nuevo objeto producto
  const newProduct = {
    id: newId,
    nombre:nombre.trim(),
    precio: +precio,
    descripcion:descripcion.trim,
    imagen: "not-image.png",
    categoria: categoria?.trim(),
    stock: +stock,
    disponible:disponible==="on"
  };


  // 5° insertar el nuevo producto en el array de products
  products = [...products, newProduct];

  products = JSON.stringify(products, null, 3);
  const pathProducts = path.join(__dirname, "../../database/products.json");
  fs.writeFileSync(pathProducts, products, "utf-8");

  return res.redirect("/admin/product")
};