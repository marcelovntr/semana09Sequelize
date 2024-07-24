const { DataTypes, BelongsTo } = require("sequelize");
const connection = require("../database/connection");
const Categoria = require("./Categoria"); 
const Autor = require("./Autor"); 

const Livro = connection.define("livros", {
  nome: {
    type: DataTypes.STRING,
  },
  qtd_paginas: {
    type: DataTypes.INTEGER,
  },
  autor_id:{
    type: DataTypes.INTEGER
  },
  categoria_id:{
    type: DataTypes.INTEGER
  }
});

Livro.belongsTo(Categoria,{
    foreignKey: 'categoria_id'
})

Livro.belongsTo(Autor,{
    foreignKey: 'autor_id'
}) 
module.exports = Livro
