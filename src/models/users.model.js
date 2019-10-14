const Sequelize = require('sequelize'),
    database = require('../dbconn');

const User = database.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    domain: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    // options
});

module.exports = User;