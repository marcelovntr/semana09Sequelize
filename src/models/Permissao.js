const { DataTypes } = require("sequelize");
const connection = require("../database/connection");

const Permissao = connection.define('permissoes',{
    tipoPermissao:{
        type: DataTypes.STRING,
        allowNull: false
    }

    
})


module.exports = Permissao