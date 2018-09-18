const router = require('express').Router();
const {Sock, Order, CartItem} = require('../db/models');


// ==> create new users cart <== //
router.post('/:userId/:sockId/:size/:quantity', async (req, res, next) => {
  try {
    const sock = await Sock.findById(req.params.sockId)
    const [order] = await Order.findOrCreate({where: {
        userId: req.params.userId,
        sold: false,
      }
    });
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

// ==> api/orders/removeFromCart?sockId=1
router.delete('/removeFromCart', async (req, res, next) => {
    try {
        await CartItem.destroy({
            where: {
                sockId: req.query.sockId,
            },
        });
        res.sendStatus(204)
    } catch (err) {
        next (err)
    }
})

//new route for getting order history using query
router.get('/', async (req, res, next) => {
    let orders = []
    try {
      if(Number(req.query.userId) === req.user.id) {
        orders = await Order.findAll({
        where: {
          userId: req.user.id,
          sold: true
        }
      })        
      res.json(orders);
    } else res.sendStatus(401) 
    } catch (err) {
        next(err);
    }
});


module.exports = router
