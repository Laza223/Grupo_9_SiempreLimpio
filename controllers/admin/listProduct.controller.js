const productos = require("../../database/products.json")

module.exports = (req, res) => {
    return res.render("./admin/dashboard.ejs", {productos})
  }