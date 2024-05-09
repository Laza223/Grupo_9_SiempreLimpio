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
     }
    })

    const { id, name, surname, email, avatar } = userFind


    req.session.userLogin = {
      id,
      name,
      surname,
      email,
      avatar
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
//  const { email, password, remember} = req.body;
//  const users = loadData ("users");
//
//  const userFind = users.find((u) => u.email === email);
//
//  if (!userFind) res.send("El usuario no existe");
//
//  const isPasswordValid = bcrypt.compareSync(password, userFind.password);
//
//  if (!isPasswordValid) res.send("El password es incorrecto");
//
//  req.session.userLogin = {
//    id: userFind.id,
//    name: userFind.name,
//    surname: userFind.surname,
//    avatar: userFind.avatar,
//    role: userFind.role,
//  };
//
//  if(remember) res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 * 30});
//
//  res.redirect("/")
};
