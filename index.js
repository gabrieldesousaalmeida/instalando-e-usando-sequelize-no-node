const Sequelize = require('sequelize')

const sequelize = new Sequelize('guiaperguntas', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('conexão realizada com sucesso')
}).catch(()=>{
    console.log('erro na conexão com banco de dados')
})

const User = sequelize.define('User', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      
    }
})

//para forçar a criaçao da tabela
//User.sync({force: true})

User.create({
    firstName: 'Gabriel',
    lastName: 'Almeida'
})