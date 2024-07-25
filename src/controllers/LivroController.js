const Livro = require("../models/Livro");
const Categoria = require("../models/Categoria")

class LivroController {
  async cadastrar(request, response) {
    
    try {
        const dados = request.body;
        const livroSalvo = await Livro.create(dados);

        response.status(201).json(livroSalvo)
    } catch (error) {
      console.log(error)
        response.status(500).json({ mensagem: "Erro ao cadastrar livro!" })
    }
   
  }

  async listarTodos(request, response) {
    try {
      const livros = await Livro.findAll({

        include: [
            {
                model: Categoria,
                attributes: [['id', id_categoria], 'nome']
            }],
      });
      response.json(livros);
    } catch (error) {response.status(500).json({ mensagem: "Erro ao listar livros!" });}
  }
  async deletar(request, response) {
    try {
        const id = request.params.id
       const livroAchado = Livro.findByPk(id)
       if(!livroAchado){
        return response.status(404).json({mensagem:"Livro buscado não foi encontrado"})
       }
       //const nomeApagado = livroAchado.nome
       await livroAchado.destroy()
       response.status(204).json({mensagem:'o livro foi exluído!'})

    } catch (error) {
      response.status(500).json({mensagem:"Erro ao excluir o livro"})
    }
  }
  async listarUm(request, response) {
    
    try {
        const id = request.params.id
        const livroFound = await Livro.findByPk(id)
        if(!livroFound){
            return response.status(404).json({mensagem:'O livro buscado não foi encontrado!'})
        }
        response.json(livroFound)
    } catch (error) {
        response.status(500).json({mensagem:"Erro ao encontrar o livro buscado"})
    }
   

  }
  async atualizar(request, response) {
    try {
        
        const id = request.params.id
        const dados = request.body

        const livroAtualizar = Livro.findByPk(id)
        if (!livroAtualizar) {
            return response.status(404).json({ mensagem: "Livro não encontrado!" });
          }

          //<-- se nao vem nada no body: SEQUELIZE interpreta como UNDEFINED e "ignora"
          //if (dados.nome !== undefined) livroAtualizar.nome = dados.nome; <-- assim isso não é necessário???
          livroAtualizar.nome = dados.nome
          livroAtualizar.qtd_paginas = dados.qtd_paginas
          livroAtualizar.autor_id = dados.autor_id
          livroAtualizar.categoria_id = dados.categoria_id

          await livroAtualizar.save();
      response.status(204).json(livroAtualizar);
    } catch (error) {
        response.status(500).json({mensagem:"Erro ao atualizar o livro"})
    }
  }
}

module.exports = new LivroController();
