'use strict';

const usersJSON = require("../../database/users.json")
const rolesJSON = require("../../database/roles.json")
const addressesJSON = require("../../database/addresses.json")

const addressesDBMapped = addressesJSON.map(a => {
  const user = usersJSON.find(u => u.id === a.user_id)
  return {
    active: a.active,
    street: a.street,
    streetNo: a.street_number,
    city: a.city,
    province: a.province,
    zipCode: a.zip_code,
    country: a.country,
    userId: a.user_id
  }
}).flat(1)


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Addresses', addressesDBMapped, {});  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};