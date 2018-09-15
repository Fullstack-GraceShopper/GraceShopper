const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  sold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
},
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = {
    Order,
}