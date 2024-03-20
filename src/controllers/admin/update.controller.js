const path = require("path");
const fs = require("fs");

module.exports = (req, res) => {
  const { nombre, precio, descripcion, categoria, disponible, stock } = req.body;
  const { id } = req.params;

  // Actualizar productos
  let productsEdit = products.map((producto) => {
    if (producto.id === +id) {
      return {
        ...producto, 
        nombre: nombre.trim(),
        precio: +precio,
        descripcion: descripcion.trim(),
        categoria: categoria.trim(),
        stock: +stock,
      };
    }
    return producto; 
  });

  // Convertir a JSON y escribir en el archivo
  const pathProducts = path.join(__dirname, "../../database/products.json");
  fs.writeFileSync(pathProducts, JSON.stringify(productsEdit, null, 3), "utf-8");

  return res.redirect("/");
};
