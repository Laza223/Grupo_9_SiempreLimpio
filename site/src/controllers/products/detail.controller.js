const db = require('../../db/models');

module.exports = async (req, res) => {
    try {
        let id = +req.params.id;

        let product = await db.Product.findByPk(id, { include: "category" })

        let user = null;
        if (req.session.userLogin) {
            const { id } = req.session.userLogin;
            user = await db.User.findByPk(id, { include: "address" });
        }

        res.render('./products/detailProduct.ejs', { user, product });

    } catch (error) {
        console.error("Error al cargar el home:", error);
        res.status(500).send("Error interno del servidor");
    }
}