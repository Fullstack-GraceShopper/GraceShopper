import React, {Component} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import {fetchSocksInCart, deleteSockInCart} from '../store/socks'
import {Link} from 'react-router-dom'
import Checkout from './Checkout'
import {calcTotalForButton} from './utils'

class Cart extends Component {
  constructor() {
    super()
    this.gotCart = false
    this.calcTotalForButton = calcTotalForButton.bind(this)
  }
  async componentDidMount() {
    await this.props.getUser()
  }
  async handleRemove (sockId, userId) {
    console.log(userId);
    await this.props.deleteSockThunk(sockId, userId)
  }
  getCart = async userId => {
    await this.props.getCartThunk(userId)
  }
  calcTotal = objects => {
    return `Total:   $${(this.calcTotalForButton(objects) / 100).toFixed(2)}`
  }

  render() {
    if(this.props.user.id && !this.gotCart) {
      this.getCart(this.props.user.id)
      this.gotCart = true
    }
    return (
      <div>
        <div style={{height: "30px"}} />
        <div className="flex center category-header">
          <h1>CART</h1>
        </div>
      {this.props.socks.socks ? (
      <div>
        <ul className="cart-list">
            {this.props.socks.socks.map(sock => {
              console.log(this.props.socks.socks)
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
                    <button onClick={() => this.handleRemove(sock.id, this.props.user.id)} className="remove-button hover-light">
                      <h1>X</h1>
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        {this.props.socks.socks.length ? <div id="checkout-container">
          <h2 id="total">
            {this.props.socks.socks
              ? this.calcTotal(this.props.socks.socks)
              : 'Total:   $ 0.00'}
          </h2>
          <hr />
          <Checkout name="Sockr" description="" amount={this.calcTotalForButton(this.props.socks.socks)} />
        </div> : <div>
                    <p>No Socks In Cart...</p>
                    <Link to="/" className="w100"><button className="flex space-between"><h1 className="center">Start Shopping!</h1></button></Link>
                </div>}
      </div>
    ) : (
      <div>no</div>
    )}
    </div>
    )}
}

const mapStateToProps = state => ({
  user: state.user,
  socks: state.socks
})

const mapDispatchToProps = dispatch => ({
  getCartThunk: userId => {
    dispatch(fetchSocksInCart(userId))
  },
  deleteSockThunk: (sockId, userId) => {
    dispatch(deleteSockInCart(sockId, userId))
  },
  getUser: () => {
    dispatch(me)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
