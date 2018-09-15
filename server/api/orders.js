const router = require('express').Router();
const {User, Sock, Order} = require('../db/models');
const {sockOrder} = require('../db/models/sock-order')

// ==> get all users orders <== //
router.get('/:userId', async (req, res, next) => {
    try {
      const orders = await Order.findAll({
        where: {
          userId: req.params.userId,
          sold: false
        }
      })
      console.log('ORDERS FROM SERVER #####################:   ', orders)
      res.json(orders)
    } catch (err) {
        next(err);
    }
});

// ==> create new users cart <== //
router.post('/:userId', async (req, res, next) => {
  try {
      const user = await User.findById(req.params.userId);
      const order = await Order.create({userId: user.id});

      // was using this to try and create order
      // with associations, but not quite working:
      // await user.addOrder(order, {through: {userId: user.id}})
      

      console.log('ORDER ID:      ******************', order.id)

      //trying to brute force the joinTables orderId update
      //will log the order.id in terminal but wont show in db:

      // sockOrder.orderId = order.id
      // console.log('SOCK ORDER ID: ************', sockOrder.orderId)
      // console.log('ORDER: ******************', order)

      res.json(order);
  } catch (err) {
      next(err);
  }
});

// ==> get latest unsold order <== //
router.get('/:userId/cart', async (req, res, next) => {
  try {

  } catch (err) {
      next (err);
  }
});

module.exports = router
