const updateController = require("./update.controller");
module.exports = {
    home: (req,res) => res.render("./dashboard"),
    formularioDeCarga: require("./formularioDeCarga.controller.js"),
    update: updateController.detail,
    deleteProduct: require("./deleteProduct.controller.js"),
    create: require("./create.controller.js"),
    store: require("./storeProduct.controller"),
  };
    