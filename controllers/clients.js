const Client = require('../model/Client')

module.exports = class ClientController {

  static newUser(req, res) {
    res.render('dashboard/client/a_client')
  }

  static async newUserSave(req, res) {
    
    const usuario = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
    }
    await Client.create(usuario)
    
    res.redirect('/clients')
  }

  // static async home(req, res) {
  //   res.render('clients/home')
  // }

  static async allUsers(req, res) {
    const users = await Client.findAll({ raw: true })
    res.render('dashboard/client/client', { users })
  }

  static async updateUser(req, res) {
    const id = req.params.id
    const user = await Client.findOne({ where:{id:id}, raw:true })
    res.render('dashboard/client/e_client', { user })
  }

  static async updateUserSave(req, res) {
    const id = req.body.id
    const user = {
      nome: req.body.nome,
      cpf: req.body.cpf,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
    }
    await Client.update(user, { where: {id: id} })
    .then(res.redirect('/clients'))
    .catch((err) => {
      console.log(err)
    })
  }

  static async removeUser(req, res) {
    const id = req.body.id
    await Client.destroy({ where: {id: id} })
    .then(res.redirect('/clients'))
    .catch((err) => {
      console.log(err)
    })
  }

}