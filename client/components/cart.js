import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {fetchSocksInCart} from '../store/socks'

class Cart extends Component {
  constructor() {
    super()
    this.state = {
      gotCart: false
    }
  }
  async componentDidMount() {
    const user = await this.props.getUser()
  }
  handRemove() { // OB: and replace with an animal hand?

  }
  getCart = async userId => {
    await this.props.getCartThunk(userId)
  }
  // OB: another possible universal util
  calcTotal = objects => {
    let total = 0
    objects.forEach(object => {
      total += object.price * object.cartItem.quantity
    })
    return `Total:   $${(total / 100).toFixed(2)}`
  }
  render() {
    if(this.props.user.id && !this.state.gotCart) {
      this.getCart(this.props.user.id)
      // OB: you might just want `this.gotCart = true;`
      // OB: but actually looks like this is worth deeper investigation into the original bug, logic might belong in `componentDidUpdate`
      this.state = {gotCart: true} // setState to avoid mutating??  // OB: uhoh                        
    }
                                   // this.setState({gotCart: true}) // OB: undead code
    return (
      <div>
        <div className="flex center category-header">
          <h1>CART</h1>
        </div>
        <ul className="cart-list">
          {this.props.socks.socks ? (
            this.props.socks.socks.map(sock => {
              return (
                <li className="cart-list-item" key={sock.id}>
                  <div className="cart-item-inner">
                    <img className="cart-item-img" src={sock.photos[0]} />
                    <div className="flex column">
                      <h2>{sock.name}</h2>
                      <p className="light-small">{sock.cartItem.size}</p>
                    </div>
                  </div>
                  <div className="cart-item-inner">
                    <h2>{sock.cartItem.quantity}</h2>
                    <div className="vr bgb h100" />
                    <h2 className="price">{`$${(sock.cartItem.quantity * (sock.price / 100).toFixed(2))}`}</h2>
                    {/* OB: bug below */}
                    <button onClick="this.handleRemove" className="remove-button hover-light">
                      <h1>X</h1>
                    </button>
                  </div>
                </li>
              )
            })
          ) : (
            <li>no socks in cart</li>
          )}
        </ul>
        <div id="checkout-container">
          <h2 id="total">
            {this.props.socks.socks
              ? this.calcTotal(this.props.socks.socks)
              : 'Total:   $ 0.00'}
          </h2>
          <hr />
          <button id="checkout-button">
            <h2>Checkout</h2>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  socks: state.socks
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: userId => {
    dispatch(fetchSocksInCart(userId))
  },
  getUser: () => {
    dispatch(me)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
