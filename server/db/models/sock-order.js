const Sequelize = require('sequelize');
const db = require('../db');

const sockOrder = db.define('sock-order', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = {
    sockOrder,
}