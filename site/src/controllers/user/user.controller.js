const usuarios = require("../../database/users.json")


module.exports = (req, res) => {
  const id = req.session.userLogin.id;
  let usuario = usuarios.find( usuario => usuario.id === id)
    res.render("./user/userEdit", {usuario})
  };
  