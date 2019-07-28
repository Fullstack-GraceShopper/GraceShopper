const router = require('express').Router()
const {Sock, Order, CartItem, User} = require('../db/models')

router.get('/', async (req, res, next) => {
    let orders = []
    try {
      if(Number(req.query.userId) === req.user.id) {
        orders = await Order.findAll({
        where: {
          userId: req.user.id
        }
      })
      res.json(orders)
    } else res.sendStatus(401)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
  const {id, email} = req.body
  try {
    const order = await Order.create({
      userId: id
    })
    res.json(order)
  } catch(err) {
    console.error(err)
  }
})

module.exports = router
