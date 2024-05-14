const db = require('../../db/models')
const {QueryTypes} = require("sequelize") 

module.exports = async (req, res) => {

    try {
        const categories = 
        await db.sequelize
        .query(`
        SELECT categories.name as "category", count(products.categoryId) as "count"
        FROM categories
        inner join products on products.categoryId = categories.id
        group by categories.name`, { type: QueryTypes.SELECT })

        const products = 
        await db.Product.findAll(
           { include:["category"]}
        )

        const productsMapped = products.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description,
            detail: `http://localhost:3030/api/productos/${product.id}`
        }))

        const response = {
            count: productsMapped.length,
            countByCategory: categories,
            products: productsMapped,
        };

        return res.status(200).json(response)

    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
}

