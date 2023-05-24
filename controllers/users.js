const conn = require('../db/conn')
const User = require('../model/User')

module.exports = class users {

    static login(req, res, next) {
      res.render('login');
    }

    static dashboard(req, res){
      
      res.render("dashboard/dashboard")
    }
  
    static async login_post(req, res, next) {
      const { email, senha } = req.body;
      console.log(`email: ${email}, senha: ${senha}`);
  
      const user = await User.findOne({ where: { email, senha } });
  
      if (!user) {
        console.log("Usuário não encontrado");
        res.redirect('/login'); // Redirecionar para a página de login em caso de falha de autenticação
      } else {
        console.log("Usuário encontrado");
        req.session.user = user; // Salvar o usuário na sessão
        res.redirect('/dashboard'); // Redirecionar para a página home em caso de sucesso de autenticação
      }
    }

    static logout(req, res) {
      req.session.destroy()
      res.redirect('/')
    }
  
    static async home(req, res, next) {  
        const user = req.session.user;
        res.render('home', { user });
      
    }

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
  