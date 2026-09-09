// Importa as dependências:
const express = require("express");
const cors = require("cors");
const conexao = require("./db");

// Inicia a aplicação do Express:
const server = express();
// Habilita o CORS (permite requisição de qualquer origem):
server.use(cors());
// Configura o Express para aceitar requisições em JSON:
server.use(express.json());

// Configura a porta:
const PORTA = 3035;
server.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});