const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../../config/database');

const db = {};
const sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
.filter(file => {});
