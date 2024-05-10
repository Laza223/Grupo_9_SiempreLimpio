const db = require("../../db/models")
const { validationResult } = require("express-validator")

module.exports = async (req, res) => {

  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, price, description, category, stock } = req.body;
      console.log(errors);

      await db.Product
        .create({
          name: name.trim(),
          price: +price,
          categoryId: +category,
          stock: +stock,
          description: description.trim()
        })

      return res.redirect("/admin/dashboard/productos")

    }
  }

  catch (error) {
    res.send(error.message)
  }

}

