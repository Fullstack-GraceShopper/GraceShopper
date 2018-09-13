const router = require('express').Router()
const { Sock } = require('../db/models')  

/*
OB/JL: recommend using query string

1. query string is more open ended, won't need a different route handler for any possible filter query on your data set
2. sticks better to RESTful conventions

Right now: /api/socks/adults imagine converting this in your head into api.socks.adults
More natural: /api/socks?isAdult=true, reads as api.socks filter by isAdult equal to true

Think of the route name as representing a specific resource (e.g. model / table)
*/

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
