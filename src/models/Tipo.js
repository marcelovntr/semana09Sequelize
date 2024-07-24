const { DataTypes } = require('sequelize')
const connection = require('../database/connection')

const Tipo = connection.define('tipos',{
nome:{
    type: DataTypes.STRING
}
})


module.exports = Tipo