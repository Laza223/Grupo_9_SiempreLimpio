const listController = require("./list.controller");
const detailController = require("./detail.controller");

module.exports = {
  list: listController.list,
  detail: detailController.detail
};
