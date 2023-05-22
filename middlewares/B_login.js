module.exports = function B_login(req, res, next){
    if(req.session.user){
        res.redirect('/');
    }else {
        next();
    }
}
