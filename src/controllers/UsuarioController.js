const Usuario = require("../models/Usuario");

const emailPattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

class UsuarioController {
  async criar(request, response) {

    try {
      const dados = request.body;
      /**verificações */
      if (!dados.nome) {
        return response.status(400).json({ mensagem: "o nome é obrigatório!" });
      }

      if (emailPattern.test(dados.email === false)) {
        return response
          .status(400)
          .json({ mensagem: "formato de email inválido!" });
      }

      if (!(dados.senha && dados.senha.length === 10)) {
        return response
          .status(404)
          .json({ mensagem: "a senha deve possuir 10 caracteres!" });
      }

      const usuarioFound = await Usuario.findOne({
        where: {
          email: dados.email,
        },
      });

      if(usuarioFound){
        return response.status(400).json({mensagem: "usuário já cadastrado!"})
      }

      const usuario = await Usuario.create({
        nome: dados.nome,
        email: dados.email,
        senha: dados.senha,
      })

      response.status(201).json(usuario)


    } catch (error) {
        response
        .status(500)
        .json({ mensagem: "Não foi possível cadastrar usuario!" });
    }
  }
}

module.exports = new UsuarioController();
