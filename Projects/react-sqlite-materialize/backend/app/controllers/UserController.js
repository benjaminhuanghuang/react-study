const e = require('express');
const { User } = require('../models');

module.exports = {
    index(req, res) {
        User.findAll()
            .then(users => res.json({
                error: false,
                data: users
            }))
            .catch(err => {
                return res.json({
                    error: true,
                    data: [],
                    error: err
                });
            });
    },

    create(req, res) {
        const { name, username } = req.body;
        User.create({
            name: name,
            username: username,
        })
            .then(user => res.status(201).json({
                error: false,
                data: user,
                message: 'New user has been created.'
            }))
            .catch(err => res.json({
                error: true,
                data: [],
                error: err
            }));
    },

    update(req, res) {
        const userId = req.params.id;
        const { name, username } = req.body;
        User.update({
            name: name,
            username: username,
        }, {
            where: {
                id: userId
            }
        })
            .then(user => res.status(201).json({
                error: false,
                data: user,
                message: 'User has been updated.'
            }))
            .catch(err => res.json({
                error: true,
                error: err
            }));
    },

    delete(req, res) {
        const userId = req.params.id;
        User.destroy({
            where: {
                id: userId
            }
        })
        .then(status => res.status(201).json({
            error: false,
            message: 'User has been deleted.'
        }))
        .catch(err => res.json({
            error: true,
            error: err
        }));
    },
};