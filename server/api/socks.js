const router = require('express').Router()
const { Sock } = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const socks = await Sock.findAll()
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
