'use strict';

const usersJSON = require("../../database/users.json")
const rolesJSON = require("../../database/roles.json")

const usersDBMapped = usersJSON.map(u => {
  const role = rolesJSON.find(r => r.name === u.role)
  return {
    name: u.name,
    surname: u.surname,
    email: u.email,
    password: u.password,
    avatar: u.avatar,
    roleId: role.id,
    addressId: u.addressID,
    dni: u.dni,
    phoneNumber: u.phoneNumber
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", usersDBMapped, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};