"use strict";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("auditorios", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
      },
      qtd_max: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull:false
      },
      deletedAt:{
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("auditorios");
  },
};
