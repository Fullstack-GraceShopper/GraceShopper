// create html form
// submit method to send req body from that form to our api
// post route on server side to send that info to stripe
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class StripeForm extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json()
    })
  }

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="sk_test_Y8gUVRj8novunIPvxNp5l6GZ"
        name="Three Comma Co." // the pop-in header title
        description="Big Data Stuff" // the pop-in header subtitle
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
        ComponentClass="div"
        panelLabel="Give Money" // prepended to the amount in the bottom pay button
        amount={1000000} // cents
        currency="USD"
        locale="zh"
        email="info@vidhub.co"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay // accept Alipay (default false)
        bitcoin // accept Bitcoins (default false)
        allowRememberMe // "Remember Me" option (default true)
        opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
        closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
      />
    )
  }
}
