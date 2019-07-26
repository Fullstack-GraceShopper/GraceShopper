import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSock} from '../store/socks'
import {SizeDropdown} from './size-dropdown'
import {QuantityDropdown} from './quantity-dropdown'
import RelatedSocks from './related-socks'
import AddToCartButton from './add-to-cart-button'
import {addOrder} from '../store/orders'
import axios from 'axios'
import {me, getUser} from '../store/user'

class SingleSock extends Component {
  async componentDidMount() {
    try {
      const sockId = Number(this.props.match.params.sockId)
      await this.props.getSock(sockId)
    } catch (error) {
      console.error(error)
    }
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const size = evt.target.sizeSelect.value
      const quantity = evt.target.quantitySelect.value
      const sockId = this.props.sock.id
      evt.target.sizeSelect.value = ''
      evt.target.quantitySelect.value = 1
      if (!this.props.user.id) {
        const user = await axios.post('/api/users/createGuest')
        this.props.checkoutWithGuest(user.data)
      }
      
      await this.props.addToCart(sockId, size, quantity)
      alert('Successfully added to cart!')
    } catch(err) {
        console.log(err)
    }
  }

  render() {
    console.log()
    const {sock} = this.props
    return !sock ? (
      <div>no sock</div>
    ) : (
      <div>
        <div className="flex">
          <br />
          <div>
            <img id="single-page-photo" src={sock.photos[0]} />
          </div>
          <br />
          <div className="item-options flex column space-evenly">
            <h1 className="slight-padding single-page-label">
              {sock.name.toUpperCase()}
            </h1>
            <p className="slight-padding" id="single-price">
              {`$${(sock.price / 100).toFixed(2)}`}
            </p>
            <h3 className="slight-padding single-page-label">
              Item Description
            </h3>
            <p className="slight-padding">{sock.description}</p>
            {sock.sizes ? (
              <div>
              <form onSubmit={this.handleSubmit}>
                <SizeDropdown sock={sock} />
                <QuantityDropdown />
                <AddToCartButton />
              </form>
              </div>
            ) : (
              <p>Out of Stock :(</p>
            )}
          </div>
        </div>
        {!sock.categories ? <div /> : <RelatedSocks mainSock={sock} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sock:
      state.socks.length === 1
        ? state.socks[0]
        : state.socks.find(
            item => item.id === Number(ownProps.match.params.sockId)
          ),
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  getSock: id => dispatch(fetchSock(id)),
  getUser: () => {
    dispatch(me)
  },
  checkoutWithGuest: user => dispatch(getUser(user)),
  addToCart: (userId, sockId, size, quantity) => dispatch(addOrder(userId, sockId, size, quantity))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock)
