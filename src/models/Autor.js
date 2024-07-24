const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Autor = connection.define("autores", {
  nome: {
    type: DataTypes.STRING,
  }
});

module.exports = Autor