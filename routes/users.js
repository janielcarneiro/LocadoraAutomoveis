const express = require('express');
const users = require('../controllers/users')
const V_session = require('../middlewares/session')
const B_login = require('../middlewares/B_login')
const router = express.Router();


router.get('/login',B_login, users.login)
router.post('/loginpost', users.login_post)
router.post('/logout', users.logout)

router.get('/dashboard', users.dashboard)
router.get('/', users.home)


router.get('/users/add', users.newUser)
router.post('/users/add', users.newUserSave)

router.get('/users/edit/:id', users.updateUser)
router.post('/users/edit', users.updateUserSave)

router.post('/users/remove', users.removeUser)

router.get('/users', users.allUsers)

module.exports = router