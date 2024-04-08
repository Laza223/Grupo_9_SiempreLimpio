const { loadData, saveData } = require("../../database");
const bcrypt = require("bcryptjs");
const { validationResult, fileValidationError} = require("express-validator")

module.exports = (req, res) => {
/*   let errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    res.render("/autenticacion/registrar", {errors: errors.mapped()})
  }
  const { name, surname, email, password } = req.body;
  const users = loadData("users");
  const newUser = {
    id: !users.length ? 1 : users[users.length - 1].id + 1,
    name: name?.trim(),
    surname: surname?.trim(),
    email: email?.trim(),
    password: bcrypt.hashSync(password?.trim(), 10),
    avatar: "",
    role: "usuario",
  };

  users.push(newUser);

  saveData(users, "users");

  res.redirect("/") */
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    const { name, surname, email, password } = req.body;
  const users = loadData("users");
  const newUser = {
    id: !users.length ? 1 : users[users.length - 1].id + 1,
    name: name?.trim(),
    surname: surname?.trim(),
    email: email?.trim(),
    password: bcrypt.hashSync(password?.trim(), 10),
    avatar: "",
    role: "usuario",
  };

  users.push(newUser);

  saveData(users, "users");

  return res.redirect("/")
  } else {
    console.log(errors);
    return  res.render("./authentication/register",  {errors: errors.mapped()})
  }

};