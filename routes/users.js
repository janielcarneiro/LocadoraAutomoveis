const express = require('express');
const users = require('../controllers/users')
const V_session = require('../middlewares/session')
const B_login = require('../middlewares/B_login')
const router = express.Router();


router.get('/login',B_login, users.login)
router.post('/loginpost', users.login_post)
router.post('/logout', users.logout)

router.get('/dashboard',V_session, users.dashboard)
router.get('/', users.home)

module.exports = router