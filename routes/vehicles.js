const express = require('express');
const vehicles = require('../controllers/Veiculos')
const router = express.Router();

//router.get('/', users.home)
router.get('/', vehicles.render_list)
router.get('/add', vehicles.render_veicles_add)
router.get('/edit/:id', vehicles.render_veicles_edit)


router.post('/add/register', vehicles.register)
router.post('/edit/:id', vehicles.edit)
router.post('/delete/:id', vehicles.delete)


module.exports = router