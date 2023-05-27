'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('category', [{
      kindom_ID: 1,
      img: 'public/image/image.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('category', null, {});
  }
};
