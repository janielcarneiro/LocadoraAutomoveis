const express = require('express');
const veiculos = require('../controllers/veiculos')


const router = express.Router();

//router.get('/', users.home)

//Rota de Cadastro
router.post('/cadastro', veiculos.cadastro);
router.post('/edit/save/:id', veiculos.editar);
router.post('/remove/:id', veiculos.remover);

module.exports = router