const router = require('express').Router()
const {User} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/createGuest', async (req, res, next) => {
  try {
    const user = await User.create({
      email: `${req.sessionID}@sockr.com`,
      password: `${req.sessionID}`,
      address: '#',
    });
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    next (err)
  }
})
