var User = require('../../services/users/users.services'),
    user = new User();
class LoginModule {
    validate(data, req, res) {
        user.login(data).then(user => {
            if(user) {
                req.session.user = user.dataValues;
                res.redirect('/perfil');
            }
            res.redirect('/');
        }, console.log);
    }
}

module.exports = LoginModule;