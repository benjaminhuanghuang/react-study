 const e = require('express');
const {User} = require('../models');

 module.exports = {
    index(req, res) {
        User.findAll()
        .then(users => res.json({
            error: false,
            data:users
        }))
        .catch(err => res.status(500).json(err));
    },

    create: async (req, res) => {
        const user = await User.create(req.body);
        res.json(user);
    },

    update: async (req, res) => {
        const user = await User.findByPk(req.params.id);
        user.update(req.body);
        res.json(user);
    },

    delete: async (req, res) => {
        const user = await User.findByPk(req.params.id);
        user.destroy();
        res.json(user);
    },
 };