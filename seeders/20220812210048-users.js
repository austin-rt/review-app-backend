'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: "Austin",
          lastName: "Taylor",
          username: "austinrt",
          email: "e@mail.com",
          passwordDigest: "sddghkfhukjyfghrt56h"
        },
        {
          firstName: "Alex",
          lastName: "Ab",
          username: "alexab",
          email: "e1@mail.com",
          passwordDigest: "sddghkfhukjyfghrt56h"
        },
        {
          firstName: "Deonte",
          lastName: "LaBorde",
          username: "deontel",
          email: "e2@mail.com",
          passwordDigest: "sddghkfhukjyfghrt56h"
        },
        {
          firstName: "Russell",
          lastName: "Ochoa",
          username: "russello",
          email: "e3@mail.com",
          passwordDigest: "sddghkfhukjyfghrt56h"
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
