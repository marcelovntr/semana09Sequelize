"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("leitores", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      cpf: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(14),
      },
      data_nascimento: {
        type: Sequelize.DATE,
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("leitores");
  },
};
