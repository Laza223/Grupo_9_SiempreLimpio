const db=require("../../db/models")

module.exports = (req, res) => {
    db.Category.findAll()
    .then((categoria) => {
      res.render("admin/createProduct",{ categoria,title:"crear" },(err, contentView) => {
        err && res.send(err.message)
        res.render("partials/dashboard", { contentView })
      })
    })
  };