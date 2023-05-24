const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('Locadora', 'root', '12345', {
        host: 'localhost',
        dialect: 'mysql'
});

try{
    sequelize.authenticate();
    console.log("Database conectado");
}catch(error){
    console.log("error na conexão: ", error);
}

module.exports = sequelize;