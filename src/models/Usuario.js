const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const { hashSync} = require('bcryptjs')

const Usuario = connection.define("usuarios", { //<-- apenas subindo o código do modelo
  nome: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    allowNull: false,
    senha: DataTypes.STRING(10),
  },
});
Usuario.beforeSave((usuario)=>{
  usuario.senha = hashSync(usuario.senha, 10)
  return usuario
  })
module.exports = Usuario