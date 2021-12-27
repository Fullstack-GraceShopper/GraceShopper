const router = require('express').Router()
const {User, Address} = require('../db/models')

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

router.post('/create-guest', async (req, res, next) => {
  try {
    const user = await User.create({
      email: `${req.sessionID}@sockr.com`,
      password: `${req.sessionID}`,
      address: '#',
      isGuest: true
    });
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    next (err)
  }
})

router.post('/:userId/account-details/shipping', async (req, res, next) => {
  const {street, city, state, zipCode} = req.body
  const {userId} = req.params

  try {
    const address = await Address.create({
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      userId: userId
    });
    res.send(200)
  } catch (err) {
    next (err)
  }
})

router.get('/:userId/account-details/shipping', async (req, res, next) => {
  const {userId} = req.params

  try {
    const addresses = await Address.findAll({
      where: {
        userId: userId
      }
    });
    console.log('ADDRESSES:  ', addresses)
    // res.json(addresses)
  } catch (err) {
    next (err)
  }
})
