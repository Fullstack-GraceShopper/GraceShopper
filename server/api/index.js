const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/adults', require('./adults'))
router.use('/kids', require('./kids'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
