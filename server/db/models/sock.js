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
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            isDecimal: true,
        },
    },
    isAdult: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    sizes: {
       type: Sequelize.ARRAY(Sequelize.STRING),
       allowNull: false, 
    },
    category: {
        type: Sequelize.ARRAY(Sequelize.STRING),
    },

});

module.exports = {
    Sock,
}