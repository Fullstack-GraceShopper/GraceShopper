const router = require('express').Router();
const {User, Sock, Order} = require('../db/models');

router.get('/:userId', async (req, res, next) => {
    try {
      const orders = await Order.findAll({
        where: {
          userId: req.params.userId
        }
      })
      res.json(orders);
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

router.get('/:userId/cart', async (req, res, next) => {
    try {
        const order = await Order.findAll({
            limit: 1,
            where: {
                userId: req.params.userId,
            },
            order:[['createdAt', 'DESC']]
        });
        res.json(order);
    } catch (err) {
        next (err);
    }
});

router.get('/inCart/:cartNumber', async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.cartNumber, {
            include: [{
                model: Sock,
            }]
        });
        res.json(order);
    } catch (err) {
        next (err);
    }
})

router.get('/inCart/:cartNumber', async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.cartNumber, {
            include: [{
                model: Sock,
            }]
        });
        res.json(order);
    } catch (err) {
        next (err);
    }
})

router.get('/:userId/order-history', async (req, res, next) => {
    try {
      const orders = await Order.findAll({
        where: {
          userId: req.params.userId,
          sold: true
        }
      })
      res.json(orders);
    } catch (err) {
        next(err);
    }
});

module.exports = router
