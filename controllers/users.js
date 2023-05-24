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
  
    static async home(req, res, next) {  
        const user = req.session.user;
        res.render('home', { user });
      
    }
  }
  