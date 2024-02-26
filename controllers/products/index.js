const listController = require("./list.controller");
const detailController = require("./detail.controller");
const updateController = require("../admin/update.controller");
const createController = require("../admin/create.controller");

module.exports = {
  list: listController.list,
  detail: detailController.detail,
};
