const db = require("../../db/models");

module.exports = (req, res) => {

    Promise.all([
        db.Product.findByPk(req.params.id, {
            include: [{
                model: db.Category,
                as: "category",
            }]
        }),
        db.Category.findAll()
    ])
        .then(([producto, categorias]) => {
            res.render("admin/updateProduct", { producto, categorias });
        })
        .catch(error => { console.error("Error al obtener producto y categorías:", error); });
}
