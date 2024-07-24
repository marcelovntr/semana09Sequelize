const Instrumento = require("../models/Instrumento");

class InstrumentoController {
  async cadastrar(request, response) {
    try {
      const dados = request.body;
      /*validações!!!*/
      if (!dados.nome) {
        return response.status(400).json({ mensagem: "Nome é obrigatório!" });
    }
    
    if (typeof dados.nome !== 'string' || dados.nome.length > 150) {
        return response.status(400).json({ mensagem: "Nome deve ser uma string com no máximo 150 caracteres!" });
    }
    
    if (dados.situacao && (typeof dados.situacao !== 'string' || dados.situacao.length > 50)) {
        return response.status(400).json({ mensagem: "Situação deve ser uma string com no máximo 50 caracteres!" });
    }
    
    if (dados.tipo_id && typeof dados.tipo_id !== 'number') {
        return response.status(400).json({ mensagem: "Tipo ID deve ser um número!" });
    }
      const instrumentoCad = await Instrumento.create(dados);

      response.status(201).json(instrumentoCad);
    } catch (error) {
      console.error('Erro ao cadastrar o instrumento:', error);
      response
        .status(500)
        .json({ mensagem: "Erro ao cadastrar o instrumento!" });
    }
  }

  async listarUm(request, response) {
    try {
      const id = request.params.id;

      const instFound = await Instrumento.findByPk(id);

      if (!instFound) {
        return response
          .status(404)
          .json({ mensagem: "instrumento inexistente" });
      }
console.log(instFound)
      response.status(201).json(instFound);
    } catch (error) {
      response.status(500).json({ mensagem: "Erro ao buscar o instrumento!" });
    }
  }

  async listarTodos(request, response) {
    const instrumentos = await Instrumento.findAll({
        attributes:[
            'nome', 'situacao', 'tipo_id'
        ]
    })

    response.status(201).json(instrumentos);
  }

  async deletar(request, response) {
    try {
        
const id = request.params.id
const instrAchado = await Instrumento.findByPk(id)

if(!instrAchado){
    return response
          .status(404)
          .json({ mensagem: "instrumento não encontrado" });
}
     await instrAchado.destroy();
      response.status(204).json();
    } catch (error) {
        response.status(500).json({ mensagem: "Erro ao excluir o instrumento!" })
    }
  }

  async atualizar(request, response) {
   
   try {
    
    const dados = request.body
    const id = request.params.id

    const instAtualizar = await Instrumento.findByPk(id)
    if(!instAtualizar){
        return response.status(404).json({ mensagem: "Instrumento não encontrado!" });
    }

    instAtualizar.nome = dados.nome
instAtualizar.situacao = dados.situacao
instAtualizar.tipo_id = dados.tipo_id

await instAtualizar.save()
response.json(instAtualizar)

   } catch (error) {
    response.status(500).json({ mensagem: "Erro ao atualizar o instrumento!" });
   }
   

}
}

module.exports = new InstrumentoController();
