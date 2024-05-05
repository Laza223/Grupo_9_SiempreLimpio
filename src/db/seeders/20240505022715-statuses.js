'use strict';

const statusesJSON = require("../../database/statuses.json")

const statusesDBMapped = statusesJSON.map((s) => {
  return {
    name: s.name
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('statuses', statusesDBMapped, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('statuses', null, {});
  }
}