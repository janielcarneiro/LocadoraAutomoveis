const {DataTypes} = require('sequelize');
const db = require('../db/conn');


const Client = db.define('Client', {
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    cpf: {
        type: DataTypes.STRING,
        required: true
    },
    telefone: {
        type: DataTypes.STRING,
        required: true
    },
    endereco: {
        type: DataTypes.STRING,
        required: true
    }, 
});

module.exports = Client;