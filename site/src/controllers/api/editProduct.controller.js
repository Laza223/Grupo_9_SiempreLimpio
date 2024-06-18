const db = require("../../db/models");

module.exports = async (req, res) => {
    try {

        const { name, price, categoryId, stock, description, id } = req.body
        const image = req.file ? req.file.filename : "product-default.jpg";

        await db.Product.update(
            {
                name: name,
                price: price,
                categoryId: categoryId,
                stock: stock,
                image: image,
                description: description
            },
            {
                where: { id: id }
            })
        console.log({imageName: image});
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