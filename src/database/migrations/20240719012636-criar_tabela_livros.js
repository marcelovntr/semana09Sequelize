"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("livros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.INTEGER(150),
        unique: true,
        allowNull: false,
      },
      qtd_paginas: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "categorias",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      autor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "autores",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
      deletedAt: { type: Sequelize.DATE },
    });
  },

  async down(queryInterface, Sequelize) {
   
     await queryInterface.dropTable('livros');
     
  },
};
