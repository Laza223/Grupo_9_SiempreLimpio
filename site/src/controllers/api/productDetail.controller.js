const db = require("../../db/models");

module.exports = async (req, res) => {
    try {
        const id = +req.params.id;
        const product = await db.Product.findByPk(id, {
            include: ["category"]
        });

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }


        const imageURL = `http://localhost:3030/images/products/${product.image}`;

        return res.status(200).json({
            ok: true,
            data: {
             product,
             image: imageURL,
            }
        });

    } catch (error) {
        console.error("Error al obtener el producto:", error);
        res.status(500).json({
            ok: false,
            message: "Error interno del servidor"
        });
    }
};
