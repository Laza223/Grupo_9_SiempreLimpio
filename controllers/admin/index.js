const updateController = require("./update.controller");
module.exports = {
    home: (req,res) => res.render("./dashboard"),
    create: require("./create.controller"),
    update: updateController.detail,
    deleteProduct: require("./deleteProduct.controller.js"),
  };
  