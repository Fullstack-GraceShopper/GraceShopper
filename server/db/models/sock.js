const Sequelize = require('sequelize');
const db = require('../db');

const Sock = db.define('sock', {
    photos: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: ['https://content.mycutegraphics.com/graphics/clothing/pair-of-black-white-crew-socks-clip-art.png'],
        validate: {
            isUrl: true, // OB/JL: does this work? investigate
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
    isAdult: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
    sizes: {
        // OB/JL: consider validations / default values
        // OB/JL: inconsistent indentation (look into / reach out for help on prettier configuration and usage)
       type: Sequelize.ARRAY(Sequelize.STRING),
    },
    categories: {
        type: Sequelize.ARRAY(Sequelize.STRING),
    },

});

module.exports = {
    Sock, // OB/JL: good match on consistency, feel free to change this and user
}