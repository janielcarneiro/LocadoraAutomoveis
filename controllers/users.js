module.exports = class users {

    static async home(req, res, next){     
            res.render('home', { users });
    }

}