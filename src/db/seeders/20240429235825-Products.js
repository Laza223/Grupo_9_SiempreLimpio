'use strict';

const productsJSON = require("../../database/products.json")
const categoriasJSON = require("../../database/categories.json")

const productsDBMapped = productsJSON.map(p => {
  const category = categoriasJSON.find(c => c.name === p.categoria)
  return {
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
    categoryId: category.id
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', productsDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};