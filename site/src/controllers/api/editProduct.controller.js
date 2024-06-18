const db = require("../../db/models");

module.exports = async (req, res) => {
    try {

        const { name, price, categoryId, stock, description, id } = req.body

        await db.Product.update({
            name: name,
            price: price,
            categoryId: categoryId,
            stock: stock,
            description: description
        },
            {
                where: { id: id }
            })

            console.log(req.body);

        return res.status(200).json({
            msg: 'Success Upload'
        })

    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}