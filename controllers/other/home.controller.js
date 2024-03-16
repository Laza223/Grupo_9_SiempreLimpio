const productos = require("../../database/products.json")
console.log(productos);
module.exports = (req, res) => {
  res.render("./other/home.ejs", {productos})
}