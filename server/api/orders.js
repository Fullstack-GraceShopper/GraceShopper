const router = require('express').Router();
const {User, Sock, Order} = require('../db/models');

// OB: RESTful convention breaking
/*
/api/orders/5 <= looks like an order is being retreived by id, but actually:

1. Many orders are being retrieved
2. The id is not an order id

You could instead do:
/api/users/5/orders
OR
/api/orders?userId=5
*/
// OB: also consider access control / permissions for these routes, e.g. should assert that `req.user.id === req.query.userId` and if it DOESN'T send back some error (401, 403)
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
// OB: similar feelings about URI structure
/*
/api/orders/5/2/big/10

Could instead attach all this info to the request body
*/
router.post('/:userId/:sockId/:size/:quantity', async (req, res, next) => {
  // OB: anytime you find yourself adding a lot of logic to a router handler, consider putting it into a separate method all of its own; maybe there'd be `order.insertNewItem()` instance method
  try {
    const sock = await Sock.findById(req.params.sockId)
    const [order] = await Order.findOrCreate({where: {
        userId: req.params.userId,
        sold: false,
      }
    });
    // OB: missing await below, potential race condition and missing error handling
    order.addSock(sock, {
      through: {
        size: req.params.size,
        quantity: req.params.quantity
      }
    })

    res.json(order);
  } catch (err) {
      next(err);
  }
});

// OB: potential security vulnerability for privacy, consider using `req.user.id` instead of something sent in the request
// OB: also could help RESTfulize it, could have /api/cart route
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

// OB: RESTful conventions, consider changing
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

// OB: dead code?
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

// OB: could be bundled into GET /api/orders, GET /api/orders?userId=5&sold=true
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
