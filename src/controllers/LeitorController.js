const Leitor = require("../models/Leitor");

class LeitorController {
  async cadastrar(request, response) {
    try {
      const dados = request.body;

      //if(!dados || Object.keys(dados).length === 0)
      if (!dados || dados.length === 0) {
        return response
          .status(404)
          .json({ mensagem: "não foi possível obter os dados" });
      }
      /*MAIS VALIDAÇÕES!!!*/
      //     const cpfBuscado = dados.cpf
      //   const leitorBuscado = await Leitor.findOne(cpfBuscado)
      const leitorBuscado = await Leitor.findOne({
        where: {
          cpf: dados.cpf,
        },
      });

      if (leitorBuscado) {
        return response.status(400).json({ mensagem: "leitor já cadastrado!" });
      }
      const leitorAdicionado = await Leitor.create(dados);
      response.status(204).json(leitorAdicionado);
    } catch (error) {
      response.status(500).json({ mensagem: "Houve erro no cadastro!" });
    }
  }

  async listarTodos(request, response) {
    try {
      const leitores = await Leitor.findAll({
        attributes: ["nome", ["data_nascimento", "Nascimento"]],
        order: ["data_nascimento", "DESC"],
      });
    } catch (error) {
      response.status(500).json({ mensagem: "Erro ao listar os leitores!" });
    }
  }

  async listarUm(request, response) {
    try {
      const id = request.params.id;
      const leitorProcurado = await Leitor.findByPk(id);

      if (!leitorProcurado) {
        return response
          .status(404)
          .json({ mensagem: "leitor não encontrado!" });
      }

      response.status(204).json(leitorProcurado);
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "erro ao procurar o leitor desejado!" });
    }
  }

  async atualizar(request, response) {
    try {
      const id = request.params.id;
      const dados = request.body;

      const leitorAtualizar = await Leitor.findByPk(id);
      if (!leitorAtualizar) {
        return response
          .status(404)
          .json({ mensagem: "Leitor não encontrado p/ atualização!" });
      }
      leitorAtualizar.nome = dados.nome;
      leitorAtualizar.cpf = dados.cpf;
      leitorAtualizar.data_nascimento = dados.data_nascimento;

      await leitorAtualizar.save();
      response.json(leitorAtualizar);
    } catch (error) {
        response
        .status(500)
        .json({ mensagem: "erro ao atualizar o leitor!" });
    }
  }

  async deletar(request, response) {
    try {
      const id = request.params.id;
      const leitorBuscado = await Leitor.findByPk(id);

      if (!leitorBuscado) {
        return response
          .status(404)
          .json({ mensagem: "leitor não encontrado!" });
      }

      const nomeLeitor = leitorBuscado.nome;
      await leitorBuscado.destroy();
      response
        .status(200)
        .json({ mensagem: `Leitor ${nomeLeitor} foi deletado com sucesso.` });
    } catch (error) {
      response
        .status(500)
        .json({ mensagem: "erro ao excluir o leitor desejado!" });
    }
  }
}

module.exports = new LeitorController();
