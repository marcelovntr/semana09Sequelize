"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("instrumentos", {
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
      situacao: {
        type: Sequelize.STRING(50),
      },
      tipo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tipos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      //ERRRO!!!ERRRO!!!ERRRO!!!ERRRO!!!ERRRO!!!ERRRO!!!
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("instrumentos");
  },
};



