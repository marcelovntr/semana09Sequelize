"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("instrumentos", "deletedAt", {
      type: Sequelize.DATE,
      allowNull: true,  // Permite nulos para deletedAt
    });

    await queryInterface.changeColumn("instrumentos", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: false,  // Não permite nulos para updatedAt
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("instrumentos", "deletedAt", {
      type: Sequelize.DATE,
      allowNull: false,  // Restaura o estado original, se necessário
    });

    await queryInterface.changeColumn("instrumentos", "updatedAt", {
      type: Sequelize.DATE,
      allowNull: true,  // Restaura o estado original, se necessário
    });
  },
};