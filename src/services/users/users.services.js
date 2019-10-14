var UserTable = require('../../models/users.model');

class Users {
    all(res) {
        UserTable.findAll().then(users => {
            res.json(users);
        }, err => {
            console.log(err);
            res.json({ status: 'failure', code: '0' });
        });
    }

    getUser(username, res) {
        UserTable.findAll({
            where: {
                username: username,
            }
        }).then(users => {
            res.json(users);
        }, err => {
            console.log(err);
            res.json({ status: 'failure', code: '0' });
        });
    }

    login(data) {
        return UserTable.findOne({
            where: {
                username: data.username,
                password: data.password,
            }
        });
    }

    create(data, res) {
        if(!this.validUser(data, res)) {
            return;
        }
        UserTable.create(data).then(users => {
            res.json({ status: 'success', code: '1', message: '' });
        }, err => {
            res.json({ status: 'failure', code: '0', message: 'Error al realizar el registro' });
        });
    }

    update(data, res) {
        if(!this.validUser(data, res)) {
            return;
        }
        UserTable.update(data, {
            where: {
                id: data.id
            }
        }).then(users => {
            res.json({ status: 'success', code: '1', message: '' });
        }, err => {
            console.log(err);
            res.json({ status: 'failure', code: '0', message: 'Error al realizar el registro' });
        });
    }

    validUser (data, res){
        if (data.username === "") {
            res.json({ status: 'failure', code: '0', message: 'El campo username no puede estar vacio' });
            return false;
        }
        return true;
    }
}

module.exports = Users;