const router = require('express').Router()
const { Sock } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const socks = await Sock.findAll({where: {isAdult: true}})
    res.json(socks)
  } catch(err) {
    next(err)
  }
})

module.exports = router