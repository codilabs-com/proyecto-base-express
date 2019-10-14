var express = require('express'),
    router = express.Router()
loginRoute = require('./login/login.route');

function isLogin(req, res, next) {
    if (!req.session || !req.session.user) {
        res.redirect('/');
        return;
    }
    next();
}

router
    .use('/', loginRoute)
    .get('/perfil', isLogin, (req, res) => {
        res.render(__dirname + '/perfil/perfil.view.ejs', {data: req.session.user})
    });

module.exports = router;