import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {getCurrentOrder, removeSockFromOrder} from '../store/orders'
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
    await this.props.deleteSockFromCart(sockId, userId)
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
        {this.props.order && this.props.order.length ? (
          this.props.order[0].cartItem ? (
            <div>
              <ul className="cart-list">
                {this.props.order.map(sock => {
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
              {this.props.order.length ? (
                <div id="checkout-container">
                  <h2 id="total">
                    {this.props.order
                      ? this.calcTotal(this.props.order)
                      : 'Total:   $ 0.00'}
                  </h2>
                  <hr />
                  <Checkout
                    name="Sockr"
                    description=""
                    user={this.props.users}
                    amount={this.calcTotalForButton(this.props.order)}
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

const mapStateToProps = ({user, orders}) => ({user, order: orders[0]})

const mapDispatchToProps = dispatch => ({
  getCartThunk: userId => {
    dispatch(getCurrentOrder(userId))
  },
  deleteSockFromCart: (sockId, userId) => {
    dispatch(removeSockFromOrder(sockId, userId))
  },
  getUser: () => {
    dispatch(me)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
