const { DataTypes } = require("sequelize");
const connection = require("../database/connection");




const Auditorio = connection.define('auditorios',{
    nome:{
        type: DataTypes.STRING(150)
    },
    descricao:{
        type:DataTypes.TEXT
    },
    qtd_max:{
        type: DataTypes.INTEGER
    }
})

module.exports = Auditorio