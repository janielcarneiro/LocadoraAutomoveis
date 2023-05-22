const User = require('../model/User')

module.exports = class UserController {

  static newUser(req, res) {
    res.render('dashboard/user/a_user')
  }

  static async newUserSave(req, res) {
    
    const usuario = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      login: req.body.login,
      senha: req.body.senha,
    }
    await User.create(usuario)
    
    res.redirect('/users')
  }

  // static async home(req, res) {
  //   res.render('users/home')
  // }

  static async allUsers(req, res) {
    const users = await User.findAll({ raw: true })
    res.render('dashboard/user/user', { users })
  }

  static async updateUser(req, res) {
    const id = req.params.id
    const user = await User.findOne({ where:{id:id}, raw:true })
    res.render('dashboard/user/e_user', { user })
  }

  static async updateUserSave(req, res) {
    const id = req.body.id
    const user = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      login: req.body.login,
      senha: req.body.senha,
    }
    await User.update(user, { where: {id: id} })
    .then(res.redirect('/users'))
    .catch((err) => {
      console.log(err)
    })
  }

  static async removeUser(req, res) {
    const id = req.body.id
    await User.destroy({ where: {id: id} })
    .then(res.redirect('/users'))
    .catch((err) => {
      console.log(err)
    })
  }

}