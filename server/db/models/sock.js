const Sequelize = require('sequelize');
const db = require('../db');

const Sock = db.define('sock', {
  photos: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ['https://content.mycutegraphics.com/graphics/clothing/pair-of-black-white-crew-socks-clip-art.png'],
    validate: {
      isUrl: true,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },
  description: {
    type: Sequelize.TEXT
  },
  isAdult: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  sizes: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  categories: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },

});

module.exports = {Sock}
