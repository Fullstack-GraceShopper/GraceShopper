const router = require('express').Router()
const {Sock} = require('../db/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.get('/', async (req, res, next) => {
  try {
    let socks = []
    if(req.query.isAdult === 'true'){
      socks = await Sock.findAll({where: {isAdult: true}})
    } else if (req.query.isAdult === 'false'){
      socks = await Sock.findAll({where: {isAdult: false}})
    } else {
      socks = await Sock.findAll()
    }
    // OB: might be able to shorten to `Sock.findAll({where: req.query})`
    res.json(socks)
  } catch(err) {
    next(err)
  }
});

router.get('/:sockId', async (req, res, next) => {
  try {
    const sock = await Sock.findById(req.params.sockId);
    res.json(sock);
  } catch (err) {
    next(err);
  }
})

// OB: RESTful conventions
/*
The URI GET /api/socks/category/pop-culture tends to imply that "pop-culture" is a sub-resource of "category" which is a sub-resource of "socks" AND that we will receive that resource.

Mentally convert the /s to .s api.socks.category.popCulture

Something you could use instead is the query string, so would be handled by the route handler above; might need a one-off case to deal with it.
*/
router.get('/category/:category', async (req, res, next) => {

  try {
    const category = req.params.category
    const socks = await Sock.findAll({
      where: {
        categories: {
          [Op.contains]: [category]
        }
      }
    })
    res.json(socks)
  } catch(err) {
    next(err)
  }
})

module.exports = router
