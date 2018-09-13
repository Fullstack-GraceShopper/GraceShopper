const router = require('express').Router()
const { Sock } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    let socks = []
    req.query.isAdult === true
    ? socks = await Sock.findAll({where: {isAdult: true}})
    : socks = await Sock.findAll({where: {isAdult: false}})
    res.json(socks)
  } catch(err) {
    next(err)
  }
})




//For getting single sock vvvvvv

// router.get('/:sockId', async(req, res, next) => {
//   try {
//     const sock = await Sock.findById(req.params.sockId)
//     res.json(sock)
//   } catch(err) {
//     next(err)
//   }
// })

module.exports = router
