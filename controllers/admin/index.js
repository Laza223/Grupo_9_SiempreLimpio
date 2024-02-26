
module.exports = {
    home: (req,res) => res.render("./dashboard"),
    create: require("./create.controller"),
  update: require("./update.controller")
  };
  