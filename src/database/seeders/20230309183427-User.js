/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '8e4c65d0-abe9-405a-a2f4-5b71a2338cdd',
          firstname: 'Admin',
          lastname: 'Doe',
          email: 'admin@gmail.com',
          password:
            '$2b$10$UZX4Fy9x4yJp4rTgiw0imelLLg.7JnGrrHqoPvbq9ThUlOu8e4n1e',
          role: 'admin',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  // eslint-disable-next-line no-unused-vars
  async down(queryInterface, Sequelize) {},
};
