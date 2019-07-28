// This is the checkout component. It can be rendered in the cart.
// It needs to be passed the name, description, and amount of things
// sold when it is rendered.

import React, {Component} from 'react'
import {getCartItems, clearCartItems} from '../store/cart'
import {me} from '../store/user'
import store from '../store'
import {connect} from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import STRIPE_PUBLISHABLE from '../../constants/stripe'
import PAYMENT_SERVER_URL from '../../constants/server'

const Checkout = ({user, cart, name, description, amount, clearCart}) => {
  const CURRENCY = 'USD'
  const fromDollarsToCents = amount => amount * 100

  user = user || {}
  const successPayment = async () => {
    await axios.post(`/api/orders`, user)
    const {cartId} = cart[0].cartItem
    await clearCart(cartId)
    if (user.guest) {
      await axios.delete('/api/users/guest')
    }
    alert('Payment Successful')
  }

  const errorPayment = data => {
    console.error(data)
    alert('Payment Error')
  }

  const onToken = (amount, description) => token => {
    axios
      .post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromDollarsToCents(amount),
        allowHeaders: {
          withCredentials: true
        }
      })
      .then(successPayment)
      .catch(errorPayment)
  }

  return (
    <StripeCheckout
      name={name}
      description={description}
      amount={amount}
      token={onToken(amount, description)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
    />
  )
}

const mapStateToProps = ({user, cart}) => ({user, cart})

const mapDispatchToProps = dispatch => ({
  clearCart: id => dispatch(clearCartItems(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
