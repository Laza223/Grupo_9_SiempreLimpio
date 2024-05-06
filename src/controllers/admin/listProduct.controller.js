const db = require("../../db/models");

module.exports = (req, res) => {

    Promise.all([
        db.Product.findAll( {
            include: [{
                model: db.Category,
                as: "category",
            }]
        }),
        db.Category.findAll()
    ])
        .then(([productos, categorias]) => {
            res.render("admin/listProduct", { productos, categorias });
        })
        .catch(error => { console.error("Error al obtener producto y categorías:", error); });
}
