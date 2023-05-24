const {DataTypes} = require('sequelize');

const db = require('../db/conn');

const User = db.define('Users', {
    nome: {
        type: DataTypes.STRING,
        required: true
    },

    email: {
        type: DataTypes.STRING,
        required: true
    },

    senha: {
        type: DataTypes.INTEGER,
        required: true
    },

    cpf: {
        type: DataTypes.INTEGER,
        required: true
    }
    
});

module.exports = User;