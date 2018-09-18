const Sequelize = require('sequelize');
const db = require('../db');

const {categoryArr} = require('../../../client/components/utils');  // <= use to validate category inputs

const Order = db.define('order', {
  sold: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    type: Sequelize.INTEGER
  }
});

module.exports = {
    Order,
}