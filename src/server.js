const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const connection = require('./database/connection')


const APP_PORT = process.env.APP_PORT

class Server {
  constructor(server = express()) { 
    this.middlewares(server);
    this.database();
    server.use(routes); //< era o app.use(routes)
    this.initializeServer(server);
  }

  
  async middlewares(server) {
    server.use(cors()); //quando estiver em produção habilita o CORS
    server.use(express.json());
  }

  /* Request --> (Rota --> |middlewares| --> Controller --> resposta) --> Response*/

  async database() {
   try {
    console.log("conectando ao banco de dados");
    await connection.authenticate()
   } catch (error) {
    console.log('erro ao conectar ao banco de dados', error)
   }
  
  }

  async initializeServer(server) {
    server.listen(APP_PORT, () => {
      console.log("Servidor rodando na porta 3000");
    });
  }
}

module.exports = { Server };
// const app = express(); <-- o APP "passa a ser" SERVER e vai pra class
// app.use(express.json());

//app.use(routes) <--- vai pra dentro do constructor da classe

