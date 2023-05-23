const express = require('express');
const vehicles = require('../controllers/Veiculos')
const router = express.Router();

//router.get('/', users.home)

router.post('/add/register', vehicles.register)

module.exports = router