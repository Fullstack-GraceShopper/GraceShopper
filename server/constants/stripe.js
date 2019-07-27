const configureStripe = require('stripe')

const STRIPE_SECRET_KEY = 'sk_test_Y8gUVRj8novunIPvxNp5l6GZ'

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe