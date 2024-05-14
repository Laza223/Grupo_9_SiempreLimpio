const db = require("../../db/models")
const bcrypt = require("bcryptjs");
const { validationResult, fileValidationError } = require("express-validator")

module.exports = async (req, res) => {

  const errors = validationResult(req);

  if (errors.isEmpty()) {

    const { name, surname, email, password } = req.body;

    await db.User.create({
      name: name.trim(),
      surname: surname.trim(),
      email: email.trim(),
      password: bcrypt.hashSync(password.trim(), 12),
      avatar: "default-avatar",
      roleId: 1
    })

    return res.redirect("/autenticacion/iniciar")
  } else {
    //return res.send(errors)
    console.log(errors);
    return res.render("authentication/register", { 
      old: req.body,
      errors: errors.mapped() 
    })
  }

};