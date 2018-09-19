// This is the checkout component. It can be rendered in the cart. It needs to be passed the name, description, and amount of things sold when it is rendered.

import React, {Component} from 'react'
import {fetchSocksInCart} from '../store/socks'
import {me} from '../store/user'
import store from '../store'
import {connect} from 'react-redux'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import STRIPE_PUBLISHABLE from '../../constants/stripe'
import PAYMENT_SERVER_URL from '../../constants/server'

const CURRENCY = 'USD'

const fromDollarsToCents = amount => amount * 100

let user = {};
const successPayment = async () => {
  await axios.put('/api/orders/sold')
  await store.dispatch(fetchSocksInCart());
  user = await store.dispatch(me());
  if (user.photo === 'https://www.viawater.nl/files/default-user.png') {
    await axios.delete('/api/orders/guestCheckout')
  }
  alert('Payment Successful')
}

const errorPayment = data => {
  alert('Payment Error')
}

const onToken = (amount, description) => token =>
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarsToCents(amount)
    })
    .then(successPayment)
    .catch(errorPayment)

class Checkout extends Component {
  render() {
    return (
      <StripeCheckout
        name={this.props.name}
        description={this.props.description}
        amount={this.props.amount}
        token={onToken(this.props.amount, this.props.description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name,
  description: ownProps.description,
  amount: ownProps.amount,
})

const mapDispatchToProps = dispatch => ({
  updateCart: () => dispatch(fetchSocksInCart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
