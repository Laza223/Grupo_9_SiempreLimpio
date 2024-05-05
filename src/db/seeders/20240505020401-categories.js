'use strict';

const categoriesJSON = require("../../database/categories.json")

const categoriesDBMapped = categoriesJSON.map(c => {
  return {
    name: c.name 
  }
})

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categories', categoriesDBMapped, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
