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
      guest: true,
    });
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    next (err)
  }
})

router.delete('/guest', async (req, res, next) => {
  try {
    const id = req.session.id
    const guest = await User.findOne({where: {
      email: `${id}@sockr.com`
    }})
    await guest.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})