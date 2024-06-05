const db = require("../../db/models");

module.exports = (req, res) => {
const {name, price, category, stock, description} = req.body
const image = req.file.filename ? req.file.filename : "product-default"
    db.Product.update(
        {
        
            name: req.body.name,
            price: price,
            categoryId: category, 
            stock: stock,
            image: image,
            description: description
        },
        {
            where: { id: req.params.id } 
        }
    )
    .then(() => {
        res.redirect("/admin/dashboard/productos");
    })
    .catch(error => {
        console.error("Error al actualizar el producto:", error);
    });
}
