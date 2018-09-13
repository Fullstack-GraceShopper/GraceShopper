const router = require('express').Router()

const { Sock } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    let socks = []
    req.query.isAdult === 'true'
    ? socks = await Sock.findAll({where: {isAdult: true}})
    : socks = await Sock.findAll({where: {isAdult: false}})
    res.json(socks)
  } catch(err) {
    next(err)
  }
})

module.exports = router
