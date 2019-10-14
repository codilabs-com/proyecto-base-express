var router = require('express').Router()
User = require('./users.services'),
    user = new User();

router
    .get('/', (req, res) => {
        user.all(res);
    })
    .get('/:username', (req, res) => {
        user.getUser(req.params.username, res);
    })
    .post('/', (req, res) => {
        user.create(req.body, res);
    })
    .put('/', (req, res) => {
        user.update(req.body, res);
    });

module.exports = router;