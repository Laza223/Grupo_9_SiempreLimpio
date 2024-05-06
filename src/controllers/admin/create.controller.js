const db=require("../../database/models")

module.exports = (req, res) => {
    db.categoria.findAll()
    .then((categoria) => {
      res.render("admin/createProduct",{ categoria },(err, contentView) => {
        err && res.send(err.message)
        res.render("partials/dashboard", { contentView })
      })
    })
  };