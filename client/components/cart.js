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
    await this.props.getUser()
  }
  getCart = async userId => {
    await this.props.getCartThunk(userId)
  }
  calcTotal = objects => {
    let total = 0
    objects.forEach(object => {
      total += object.price
    })
    return `Total:   $${total / 100}`
  }
  render() {
    if (this.props.user.id && !this.state.gotCart) {
      this.getCart(this.props.user.id)
      this.state = {gotCart: true}
    }
    return (
      <div>
        <div className="flex center category-header">
          <h1>CART</h1>
        </div>
        <ul className="cart-list">
          {this.props.socks.socks ? (
            this.props.socks.socks.map(sock => {
              console.log(sock)
              return (
                <li className="cart-list-item" key={sock.id}>
                  <div className="cart-item-inner">
                    <img className="cart-item-img" src={sock.photos[0]} />
                    <h2>{sock.name}</h2>
                  </div>
                  <div className="cart-item-inner">
                    <h2>3</h2>
                    <div className="vr bgb h100" />
                    <h2>{`$${sock.price / 100}`}</h2>
                    <button className="remove-button hover-light">
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
