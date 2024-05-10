const db = require('../../db/models');
const { Op } = require('sequelize')

module.exports = (req, res) => {

    const {productSearch} = req.query

    db.Product.findAll({
        where: {
            [ Op.or ]: {
                name: {
                    [Op.like] : `%${productSearch}%`
                },
                description: {
                    [Op.like] : `%${productSearch}%`
                }
            }
        }
    })
    .then((products => {
        return res.render("./other/search", {products: products})
    }))
  
}