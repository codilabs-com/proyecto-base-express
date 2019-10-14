var express = require('express'),
    router = express.Router(),
    login = new (require('./login.module'))();

router.use(express.urlencoded());
router
    .get('/', (req, res) => {
        res.render(__dirname + '/login.view.ejs')
    })
    .post('/', (req, res) => {
        login.validate(req.body, req, res);
    });

module.exports = router;