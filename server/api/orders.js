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
router.post('/:userId/:sockId', async (req, res, next) => {
  try {
    const sock = await Sock.findById(req.params.sockId)
    const [order] = await Order.findOrCreate({where: {
        userId: req.params.userId,
        sold: false
      }
    });
    order.addSock(sock)

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
