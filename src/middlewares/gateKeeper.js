const Usuario = require("../models/Usuario");
const Permissao =  require('../models/Permissao')
const gateKeeper = (permissoesRequeridas) => {
  return async (request, response, next) => {
    try {
      const { usuarioId } = request;
      const usuario = await Usuario.findByPk(usuarioId, {
        include: {
          model: Permissao,
          through: {
            attributes: [],
          },
        },
      });
      //usuario --> {nome, email, senha, permissoes:[{'permissaoX'}, {'permissaoY'}]}
      const permissoesUsuario = usuario.permissoes.map((p) => p.tipoPermissao); //['permissaoX', 'permissaoY']

      const permitido = permissoesRequeridas.every((permissao) =>
        permissoesUsuario.includes(permissao)
      );

      if (!permitido) {
        return response
          .status(401)
          .json({ mensagem: "Usuário não tem uma ou mais permissões" });
      }

      next();
    } catch (error) {
      console.log(error)
      response.status(500).json({ mensagem: "A requisição falhou" });
    }
  };
};

module.exports = gateKeeper