var express = require('express'),
    router = express.Router(),
    usersRoute = require('./users/users.route');

router.use(express.json({
    inflate: true,
    limit: '100kb',
    reviver: null,
    strict: true,
    type: 'application/json',
    verify: undefined
}));

router.use('/users', usersRoute);

module.exports = router;