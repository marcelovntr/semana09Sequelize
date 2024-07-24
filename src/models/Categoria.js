const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Categoria = connection.define("categorias", {
  nome: {
    type: DataTypes.STRING,
  }
});

module.exports = Categoria