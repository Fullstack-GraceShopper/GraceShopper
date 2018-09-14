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
});

router.get('/:sockId', async (req, res, next) => {
  try {
    console.log(req.params.findById)
    const sock = await Sock.findById(req.params.sockId);
    console.log('SOCK FROM QUERY************************:   ', sock)
    res.json(sock);
  } catch (err) {
    next(err);
  }
})

module.exports = router
