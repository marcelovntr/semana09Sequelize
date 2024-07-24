const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const Tipo = require('./Tipo')

const Instrumento = connection.define("instrumentos", {
  nome: {
    type: DataTypes.STRING,
  },
  situacao: {
    type: DataTypes.STRING
  },
  tipo_id: {
    type: DataTypes.INTEGER
  },
});

Instrumento.belongsTo(Tipo, {
  foreignKey: "tipo_id",
});
module.exports = Instrumento;
