const db = require("../../db/models")
const bcrypt = require("bcryptjs");
const { validationResult, fileValidationError } = require("express-validator");

module.exports = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {

    const userFind = await db.User.findOne({
      where: { email: req.body.email.toLowerCase() },
      attributes: {
        exclude: ['password']
     },
     include: "address"
    })

    const { id, name, surname, email, avatar, address } = userFind


    req.session.userLogin = {
      id,
      name,
      surname,
      email,
      avatar,
      address
    }

    return res.redirect("/")

    res.send(req.session.userLogin)

  } else {
    const errorsMap = errors.mapped()
    return res.render("./authentication/login", { 
      old: req.body,
      errors: errors.mapped() 
    })
  }

};
