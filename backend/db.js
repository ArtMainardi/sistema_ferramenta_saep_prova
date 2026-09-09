// Importa biblioteca:
const mysql = require("mysql2");

// Cria uma "conexão" com as credenciais do BD:
const conexao = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'saep_db'
});

// Realiza a conexão:
conexao.connect((error) => {
    if(error) {
        console.log("Erro na conexão do Banco de Dados!!");
        return;
    }
    console.log("Banco de Dados conectado com sucesso!!");
});

// Exporta a variável para outros arquivos JS:
module.exports = conexao;