const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const Usuario = require("../models/Usuario");
class LoginController {
  /**
   * findOne
   *compareSync
   * sign()
   */

  async login(request, response) {
    try {
      const dados = request.body;

      if (!dados.email || !dados.senha) {
        return response
          .status(400)
          .json({ mensagem: "email e senha são necessários" });
      }
      /* verificações*/

      const usuario = await Usuario.findOne({
        where: {
          email: dados.email,
        },
      });

      if (!usuario) {
        return response.status(404).json({ mensagem: "usuário inexistente!" });
      }

      const senhaComparada = compareSync(dados.senha, usuario.senha);
      if (senhaComparada === false) {
        return response
          .status(404)
          .json({ mensagem: "Conta não encontrada para este email ou senha" });
      }

      const token = sign(
        { id: usuario.id, nome: usuario.nome },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      response.status(201).json({
        token: token,
        id: usuario.id,})
    } catch (error) {
        response.status(500).json({mensagem: "Erro ao realizar login"})
    }
  }
}

module.exports = new LoginController();
