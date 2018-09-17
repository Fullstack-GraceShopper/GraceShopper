const Sequelize = require('sequelize');
const db = require('../db');

const cartItem = db.define('cart-item', {
  quantity: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.STRING,
  }
})

module.exports = {
  cartItem
}
