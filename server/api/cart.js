const router = require('express').Router()
const {Sock, Cart, CartItem, User} = require('../db/models')


// ==> create new users cart <== //
//api/cart/add/?sockId=int&size=int&quantity=int
router.post('/add', async (req, res, next) => {
  try {
    const sock = await Sock.findById(req.query.sockId)
    console.log('sock from server:  ', sock)
    const [cart] = await Cart.findOrCreate({where: {
        userId: req.user.id
      }
    })
    await cart.addSock(sock, {
      through: {
        size: req.query.size,
        quantity: req.query.quantity
      }
    })
    res.json(cart)
  } catch (err) {
      next(err)
  }
})

router.get('/', async (req, res, next) => {
    try {
        const cart = await Cart.findAll({
            limit: 1,
            where: {
                userId: req.user.id
            },
            cart:[['createdAt', 'DESC']]
        })
        res.json(cart)
    } catch (err) {
        next (err)
    }
})

// router.put('/sold', async (req, res, next) => {
//     try {
//         const order = await Order.findOne({
//             where: {
//                 userId: req.user.id,
//                 sold: false,
//             },
//         })
//         const update = order.update({
//             sold: true,
//         }, {returning: true})
//         res.json(update)
//     } catch (err) {
//         next (err)
//     }
// })

router.post('/in', async (req, res, next) => {
    try {
        const cart = await Cart.findById((req.body.id), {
          include: [{
              model: Sock,
          }]
        })
        res.json(cart.socks)
    } catch (err) {
        next (err)
    }
})

// ==> api/orders/removeFromCart?sockId=1
router.delete('/remove', async (req, res, next) => {
    try {
        await CartItem.destroy({
            where: {
                sockId: req.query.sockId,
            },
        })
        res.sendStatus(204)
    } catch (err) {
        next (err)
    }
})

// router.delete('/guestCheckout', async (req, res, next) => {
//   try {
//     const id = req.session.id
//     const guest = await User.findOne({where: {
//       email: `${id}@sockr.com`
//     }})
//     await guest.destroy()
//     res.sendStatus(204)
//   } catch (error) {
//     next(error)
//   }
// })

// //new route for getting order history using query
// router.get('/', async (req, res, next) => {
//     let orders = []
//     try {
//       if(Number(req.query.userId) === req.user.id) {
//         orders = await Order.findAll({
//         where: {
//           userId: req.user.id,
//           sold: true
//         }
//       })
//       res.json(orders)
//     } else res.sendStatus(401)
//     } catch (err) {
//         next(err)
//     }
// })


module.exports = router
