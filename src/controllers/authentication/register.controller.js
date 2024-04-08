module.exports = (req, res) => {
  let errors = 0
  res.render("./authentication/register.ejs", { errors: errors });
};
