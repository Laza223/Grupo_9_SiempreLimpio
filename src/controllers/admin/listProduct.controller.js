const db = require("../../db/models");

module.exports = async (req, res) => {
    try {
        const { verEliminados } = req.query;

        const queryOptions = {
            include: [{
                model: db.Category,
                as: "category",
            }],
            paranoid: verEliminados === "true" ? false : true
        };

        const [productos, categorias] = await Promise.all([
            db.Product.findAll(queryOptions),
            db.Category.findAll()
        ]);

        res.render("admin/listProduct", { productos, categorias, verEliminados }); 
    } catch (error) {
        console.error("Error al obtener producto y categorías:", error);
        res.status(500).send("Error interno del servidor.");
    }
};
