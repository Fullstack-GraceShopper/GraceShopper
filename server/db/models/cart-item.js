const Sequelize = require('sequelize');
const db = require('../db');

const CartItem = db.define('cartItem', {
  quantity: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.STRING
  }
})

module.exports = {
  CartItem,
}
