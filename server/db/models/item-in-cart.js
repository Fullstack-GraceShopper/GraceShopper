const Sequelize = require('sequelize');
const db = require('../db');

const itemInCart = db.define('cart-item', {
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = {
  itemInCart
}
