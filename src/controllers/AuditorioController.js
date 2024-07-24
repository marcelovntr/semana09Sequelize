const Auditorio = require("../models/Auditorio");

class AuditorioController {
  async cadastrar(request, response) {
    try {
      const dados = request.body;

      if (!dados || Object.keys(dados) === 0) {
        //dados.length aparentemente é errado
        return response
          .status(400)
          .json({ mensagem: "os dados não foram enviados!" });
      }

      const auditCriado = await Auditorio.create(dados);

      response.status(201).json(auditCriado);
    } catch (error) {
      response.status(500).json({ mensagem: "erro ao cadastrar auditório!" });
    }
  }

  async listarTodos(request, response) {
    try {
      const auditorios = await Auditorio.findAll({
        attributes: ["nome", "descricao", ["qtd_max", "capacidade"]],
      });
      response.status(200).json(auditorios);
    } catch (error) {
      response.status(500).json({ mensagem: "Erro ao listar auditórios!" });
    }
  }

  async listarUm(request, response) {
    try {
      const id = request.params.id;
      if (!id) {
        return response.status(400).json({ mensagem: "erro no envio do id" });
      }
      const theaterSearched = await Auditorio.findByPk(id);

      if(!theaterSearched){
        return response.status(404).json({mensagem:'O auditório buscado não foi encontrado!'})
    }
      response.status(200).json(theaterSearched);
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "Erro ao listar auditórios!" });
    }
  }

  async deletar(request, response) {
    try {
      const id = request.params.id;
      const auditorioFound = Auditorio.findByPk(id);
      if (!auditorioFound) {
        return response
          .status(404)
          .json({ mensagem: "O auditório buscado não foi encontrado" });
      }
      //const nomeApagado = auditorioFound.nome
      await auditorioFound.destroy();
      response.status(204).json({ mensagem: "o auditório foi exluído!" });
    } catch (error) {
      response.status(500).json({ mensagem: "Erro ao excluir o auditório!" });
    }
  }

  async atualizar(request, response) {
    try {
        
        const id = request.params.id
        const dados = request.body

        const auditPut = Auditorio.findByPk(id)
        if (!auditPut) {
            return response.status(404).json({ mensagem: "Auditório não encontrado!"});
          }

          //<-- se nao vem nada no body: SEQUELIZE interpreta como UNDEFINED e "ignora"
          //if (dados.nome !== undefined) livroAtualizar.nome = dados.nome; <-- assim isso não é necessário???
          auditPut.nome = dados.nome
          auditPut.descricao = dados.descricao
          auditPut.qtd_max = dados.qtd_max
          
          await auditPut.save();
      response.status(204).json(auditPut);
    } catch (error) {
        response.status(500).json({mensagem:"Erro ao atualizar o auditório"})
    }
  }
}

module.exports = new AuditorioController();
