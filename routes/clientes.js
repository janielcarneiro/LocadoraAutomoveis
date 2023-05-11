const express = require('express')
const router = express.Router()

const ClientController = require('../controllers/clients')

router.get('/add', ClientController.newUser)
router.post('/add', ClientController.newUserSave)

router.get('/edit/:id', ClientController.updateUser)
router.post('/edit', ClientController.updateUserSave)

router.post('/remove', ClientController.removeUser)

// router.get('/allUsers', UserController.allUsers)
router.get('/', ClientController.allUsers)

router.use(function(req, res){
  res.status(404).render('404')
})

module.exports = router