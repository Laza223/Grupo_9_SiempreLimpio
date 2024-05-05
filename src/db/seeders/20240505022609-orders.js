'use strict';

const ordersJSON = require("../../database/orders.json")
const usersJSON = require("../../database/users.json")
const productsJSON = require("../../database/products.json")


const ordersDBMapped = ordersJSON.map(o => {
  const user = usersJSON.find(u => u.id === o.userId)
  const product = productsJSON.find(p => p.id === o.productId)
  return {
    userId: user.id,
    productId: product.id
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
