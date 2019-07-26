import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {getCart, removeCartItem} from '../store/cart'
import Checkout from './checkout'
import StartShopping from './start-shopping'
import {calcTotalForButton} from './utils'
import {Link} from 'react-router-dom'

class Cart extends Component {
  constructor() {
    super()
    this.gotCart = false
    this.calcTotalForButton = calcTotalForButton.bind(this)
  }
  async componentDidMount() {
    await this.props.getUser()
  }
  async handleRemove(sockId, userId) {
    await this.props.deleteFromCart(sockId, userId)
  }
  getCart = async userId => {
    await this.props.getCartThunk(userId)
  }
  calcTotal = objects => {
    return `Total:   $${(this.calcTotalForButton(objects) / 100).toFixed(2)}`
  }

  render() {
    if (this.props.user.id && !this.gotCart) {
      this.getCart(this.props.user.id)
      this.gotCart = true
    }
    return (
      <div>
        <div style={{height: '30px'}} />
        <div className="flex center category-header">
          <div className="category-title">
            <h1>Cart</h1>
          </div>
        </div>
        {this.props.cart && this.props.cart.length ? (
          this.props.cart[0].cartItem ? (
            <div>
              <ul className="cart-list">
                {this.props.cart.map(sock => {
                  return (
                    <li className="cart-list-item" key={sock.id}>
                      <Link
                        className="cart-item-inner no-decoration black"
                        to={`/socks/${sock.id}`}
                      >
                        <img className="cart-item-img" src={sock.photos[0]} />
                        <div className="flex column">
                          <h2>{sock.name}</h2>
                          <p className="light-small">{sock.cartItem.size}</p>
                        </div>
                      </Link>
                      <div className="cart-item-inner">
                        <h2>{sock.cartItem.quantity}</h2>
                        <div className="vr bgb h100" />
                        <h2 className="price">{`$${(
                          sock.cartItem.quantity *
                          (sock.price / 100)
                        ).toFixed(2)}`}</h2>
                        <button
                          onClick={() =>
                            this.handleRemove(sock.id, this.props.user.id)
                          }
                          className="remove-button hover-light"
                        >
                          <h1>X</h1>
                        </button>
                      </div>
                    </li>
                  )
                })}
              </ul>
              {this.props.cart.length ? (
                <div id="checkout-container">
                  <h2 id="total">
                    {this.props.cart
                      ? this.calcTotal(this.props.cart)
                      : 'Total:   $ 0.00'}
                  </h2>
                  <hr />
                  <Checkout
                    name="Sockr"
                    description=""
                    user={this.props.users}
                    amount={this.calcTotalForButton(this.props.cart)}
                  />
                </div>
              ) : (
                <StartShopping />
              )}
            </div>
          ) : (
            <StartShopping />
          )
        ) : (
          <StartShopping />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({user, cart}) => ({user, cart})

const mapDispatchToProps = dispatch => ({
  getCartThunk: userId => {
    dispatch(getCart(userId))
  },
  deleteFromCart: (sockId, userId) => {
    dispatch(removeCartItem(sockId, userId))
  },
  getUser: () => {
    dispatch(me)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
