const Sequelize = require('sequelize');
const db = require('../db');


const cartItem = db.define('cartItem', {
  quantity: {
    type: Sequelize.INTEGER
  },
  // OB: might be misleading name
  size: {
    type: Sequelize.STRING
  }
})

module.exports = {
  cartItem
}
