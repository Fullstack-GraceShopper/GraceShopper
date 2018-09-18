const router = require('express').Router();
const {Sock, Order, CartItem} = require('../db/models');


// ==> create new users cart <== //
//api/orders/addToCart/?sockId=int&size=int&quantity=int
router.post('/addToCart', async (req, res, next) => {
  try {
    const sock = await Sock.findById(req.query.sockId)
    const [order] = await Order.findOrCreate({where: {
        userId: req.user.id,
        sold: false,
      }
    });
    await order.addSock(sock, {
      through: {
        size: req.query.size,
        quantity: req.query.quantity
      }
    })

    res.json(order);
  } catch (err) {
      next(err);
  }
});

router.get('/cart', async (req, res, next) => {
    try {
        const order = await Order.findAll({
            limit: 1,
            where: {
                userId: req.user.id,
            },
            order:[['createdAt', 'DESC']]
        });
        res.json(order);
    } catch (err) {
        next (err);
    }
});

router.post('/inCart', async (req, res, next) => {
    try {
        const order = await Order.findById((req.body.id), {
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
