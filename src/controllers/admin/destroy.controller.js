const db = require("../../db/models")

module.exports = (req, res) => {
  const {id} = req.params

    db.Product.destroy({
      where:{
        id
      },
      paranoid: true 
    })
    .then(() => {
      res.redirect("/admin/dashboard/productos")
    })
  }

