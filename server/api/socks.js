const router = require('express').Router()
const {Sock} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', async (req, res, next) => {
  try {
    let socks = []
    if(req.query.isAdult === 'true'){
      socks = await Sock.findAll({where: {isAdult: true}})
    } else if (req.query.isAdult === 'false'){
      socks = await Sock.findAll({where: {isAdult: false}})
    } else {
      socks = await Sock.findAll()
    }
    res.json(socks)
  } catch(err) {
    next(err)
  }
});

router.get('/:sockId', async (req, res, next) => {
  try {
    const sock = await Sock.findById(req.params.sockId);
    res.json(sock);
  } catch (err) {
    next(err);
  }
})

router.get('/category/:category', async (req, res, next) => {

  try {
    const category = req.params.category
    const socks = await Sock.findAll({
      where: {
        categories: {
          [Op.contains]: [category]
        }
      }
    })
    res.json(socks)
  } catch(err) {
    next(err)
  }
})

module.exports = router
