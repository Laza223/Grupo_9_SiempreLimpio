const path = require("path");
const fs = require("fs");

const pathProducts = path.join(__dirname, "../../database/products.json");
const productos = JSON.parse(fs.readFileSync(pathProducts, 'utf8'));

module.exports = (req, res) => {
  const { nombre, precio, descripcion, categoria, disponible, stock } = req.body;
  const { id } = req.params;

  // Actualizar productos
  let productsEdit = productos.map((producto) => {
    console.log("Producto actualizado1:", id);
    if (producto.id === +id) {
      const productEdit = {
        ...producto, 
        nombre: nombre.trim(),
        precio: +precio,
        descripcion: descripcion.trim(),
        categoria: categoria.trim(),
        stock: +stock,
      };
      console.log("Producto actualizado2:", id);
      return productEdit; 
    }
    console.log("Producto actualizado3:", id);
    return producto; 
  });

  // Convertir a JSON y escribir en el archivo
  const pathProducts = path.join(__dirname, "../../database/products.json");
  fs.writeFileSync(pathProducts, JSON.stringify(productsEdit, null, 3), "utf-8");
  console.log("Producto actualizado4:", id);
  return res.redirect("/admin/dashboard");


};
