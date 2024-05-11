const db = require('../../db/models');

module.exports = (req, res) => {

  db.Product.findAll()
  .then((products) => {
    return res.render("./other/home", {productos: products})
  })




}