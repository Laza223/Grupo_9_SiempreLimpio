const db = require("../../db/models")
const { validationResult } = require("express-validator")

module.exports = async (req, res) => {

  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, price, description, category, stock } = req.body;


      await db.Product
        .create({
          name: name.trim(),
          price: +price,
          categoryId: +category,
          stock: +stock,
          image:  req.file.filename,
          description: description.trim()
        })
    
      return res.redirect("/admin/dashboard/productos")

    }
  }

  catch (error) {
    res.send(error.message)
    console.log("error al intentar crear");
 
  }

}

