const router = require('express').Router()

const { Sock } = require('../db/models')

router.get('/adults', async (req, res, next) => {
  try {
    const socks = await Sock.findAll({where: {isAdult: true}})
    res.json(socks)
  } catch(err) {
    next(err)
  }
})

router.get('/kids', async (req, res, next) => {
  try {
    const socks = await Sock.findAll({where: {isAdult: false}})
    res.json(socks)
  } catch(err) {
    next(err)
  }
})

router.get('/:sockId', async(req, res, next) => {
  try {
    const sock = await Sock.findOne(req.params.sockId) // OB/JL: bug alert, use `.findById` instead
    res.json(sock)
  } catch(err) {
    next(err)
  }
})

module.exports = router
