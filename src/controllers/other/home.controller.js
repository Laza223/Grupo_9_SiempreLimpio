const productos = require("../../database/products.json")

module.exports = (req, res) => {
  res.render("./other/home.ejs", {productos})
}