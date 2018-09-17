const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  sold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  // OB: dead code
  userId: {
    type: Sequelize.INTEGER
  }
});

module.exports = {
    Order,
}