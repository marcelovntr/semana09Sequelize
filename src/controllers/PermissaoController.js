
const Permissao = require("../models/Permissao");
const Usuario = require('../models/Usuario')

class PermissaoController {
  async criar(request, response) {
    try {
      const tipoPermissao = request.body;

      if (!tipoPermissao) {
        return response
          .status(400)
          .json({ mensagem: "é necessário preencher o tipo de permissão!" });
      }

      if (tipoPermissao.length > 50) {
        return response
          .status(400)
          .json({ mensagem: "permissão pode conter no máximo 50 caracteres!" });
      }

      const permissaoCriada = await Permissao.create(tipoPermissao);
      response.status(201).json(permissaoCriada);
    } catch (error) {
      response.status(500).json({ mensagem: "erro ao criar permissão!" });
    }
  }

  async listar(request, response) {
    try {
      // const dados = request.query;

      // if (!dados) {
      // return response
      //   .status(400)
      //   .json({ mensagem: "é necessário fornecer um tipo de permissão para buscar!" });
    //}
      const permisList = await Permissao.findAll(
        /*{
        where: { tipoPermissao: dados.tipoPermissao },
      }*/);

      if (permisList.length === 0) {
        return response
          .status(404)
          .json({ mensagem: "nenhuma permissão encontrada!" });
      }

      /*} else {
    permisList = await Permissao.findAll();
  }*/
      response.json(permisList);
    } catch (error) {
      console.log(error)
      response.status(500).json({ mensagem: "erro ao listar permissões!" });
    }
  }
  async deletar(request, response) {
    try {
      const id = request.params.id;

      const permissao = await Permissao.findByPk(id);

      if (!permissao) {
        return response
          .status(404)
          .json({ mensagem: "permissão não encontrada!" });
      }
      await permissao.destroy();
      response.status(204).json()
    } catch (error) {
      console.log(error);
      response.status(500).json({ mensagem: "erro ao apagar permissão!" });
    }
  }

  async atribuirPermissao(request, response){
    const { usuarioId, permissaoId } = request.body
const usuario = await Usuario.findByPk(usuarioId)
const permissao = await Permissao.findByPk(permissaoId)

if(!usuario || !permissao){
  response.status(404).json({mensagem: 'Usuário ou Permissão não encontrados'})
}

await usuario.addPermissoes(permissao)

response.status(204).json()


} catch (error) {
  console.log(error)
  response.status(500).json({ mensagem: "erro ao atribuir permissão!" });
}
  }

  


module.exports = new PermissaoController();
