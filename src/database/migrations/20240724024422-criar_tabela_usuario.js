"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuario", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING(10),
        allowNull:false
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuario");
  },
};
