'use strict';

const orderItemsJSON = require("../../database/order_items.json")
const ordersJSON = require("../../database/orders.json")
const productsJSON = require("../../database/products.json")
const usersJSON = require("../../database/users.json")

const orderItemsDBMapped = orderItemsJSON.map(o => {
  const order = ordersJSON.find(u => u.id === o.orderId)
  const product = productsJSON.find(p => p.id === o.productId)
  const user = usersJSON.find(u => u.id === o.userId)
  return {
    order_id: o.id,
    product_id: o.product_id,
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("order_items", orderItemsDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("order_items", null, {});
  }
};
