module.exports = (req, res, next) => {

  if (req.session.userLogin?.roleAdmin === true) {
    next();
  } else {
    console.log("No tienes Permisos")
    res.redirect("/")
  }
};
