'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [
      {
        name: "Septian",
        profession: "Admin Micro",
        role: "admin",
        email: "septian@gmail.com",
        password: await bcrypt.hash('rahasia123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Nico",
        profession: "Back End Developer",
        role: "student",
        email: "nico@gmail.com",
        password: await bcrypt.hash('456rahasia', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Helmi",
        profession: "Front End Developer",
        role: "student",
        email: "helmi@gmail.com",
        password: await bcrypt.hash('789rahasia', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('users', null, {});
  }
};
