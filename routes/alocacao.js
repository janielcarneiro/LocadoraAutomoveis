const express = require('express');
const alocacao = require('../controllers/Alocacao')
const router = express.Router();

router.get('/', alocacao.render);
router.get('/add', alocacao.render_add);

module.exports = router