
const { validationResult } = require("express-validator")

const db = require("../../db/models")

module.exports = (req, res) => {
  
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, price, description, category, stock } = req.body;
  console.log(errors);


   
console.log(req.body);
db.Product.create({
  name: name.trim(),
  price: +price,
  categoryId: +category,
  stock: +stock,
  description: description.trim()
})

      .then(() => { return res.redirect("/admin/dashboard/productos") })

      .catch(err => {
        res.send(err.message)
      })

  }
};
