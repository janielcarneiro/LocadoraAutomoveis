const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Cliente = require('./Client');
const Veiculo = require('./Veiculos');
const Users = require('./User');

const Locacao = sequelize.define('Locacao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idVeiculo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idCliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idUsuario: {
    type:DataTypes.STRING,
    allowNull: false
  },
  dataInicio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dataFinal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  custo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type:DataTypes.STRING,
    allowNull: false
  }
});



//RELACIONAMENTOS
Locacao.belongsTo(Cliente, { foreignKey: 'id' }); // uma locação é feita por um cliente

Locacao.belongsTo(Veiculo, { foreignKey: 'id' }); // uma locação é feita para um veículo
Veiculo.hasMany(Locacao, { foreignKey: 'id' }); // um veículo pode ser alugado várias vezes


Users.hasMany(Locacao, { foreignKey: 'id' }); //um usuario pode alugar varias vezes
module.exports = Locacao