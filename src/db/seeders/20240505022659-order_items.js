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
    orderId: order.id,
    productId: product.id,
    userId: user.id
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("OrderItems", orderItemsDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OrderItems", null, {});
  }
};
