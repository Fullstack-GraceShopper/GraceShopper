const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  socks: Sequelize.ARRAY(Sequelize.INTEGER),
  total: Sequelize.FLOAT
})

module.exports = {
  Order
}