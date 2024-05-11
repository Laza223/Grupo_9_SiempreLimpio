'use strict';

const ordersJSON = require("../../database/orders.json")
const usersJSON = require("../../database/users.json")
const productsJSON = require("../../database/products.json")


const ordersDBMapped = ordersJSON.map(o => {
  const user = usersJSON.find(u => u.id === o.userId)
  const product = productsJSON.find(p => p.id === o.productId)
  return {
    user_id: o.user,
    date: o.date,
    status_id: o.status,
    shipping_address: o.shipping_address,
    payment_method: o.payment_method,
  }
})


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", ordersDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Orders", null, {});
  }
};