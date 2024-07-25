const { DataTypes } = require("sequelize");
const connection = require("../database/connection");
const { hashSync} = require('bcryptjs')
const Permissao = require('./Permissao')
const UsuarioPermissoes = require('./UsuarioPermissoes')

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
    type: DataTypes.STRING,
  },
});


Usuario.belongsToMany(Permissao, {
  through: UsuarioPermissoes,
  foreignKey: 'usuarioId',
  otherKey: 'permissaoId'
})

Usuario.beforeSave((usuario)=>{
  usuario.senha = hashSync(usuario.senha, 10)
  return usuario
  })
module.exports = Usuario