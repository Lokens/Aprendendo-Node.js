const Sequelize = require('sequelize')
const sequelize = new Sequelize ('teste','root','123456',{
    host: "localhost",
    dialect: 'mysql'
})

//ver se conctou o server
sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao se conectar: " + erro)
})

const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/*ciar postagem
Postagem.create({
    titulo: "titulo oi",
    conteudo: "esse é o conteudo"
})
*/

const Usuario = sequelize.define('usuarios', {
    nome : {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
Usuario.create({
    nome: "Matheus",
    sobrenome: "slama",
    idade: 21,
    email: "matheus_slama@homtail.com"
})

//Criar a tabela (executar 1 vez so)
//Usuario.sync({force: true})


