import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchOrdersForCart} from '../store/orders'
import axios from 'axios';

class OrderList extends Component {

  async componentDidMount () {
    
    try {
      const userId = Number(this.props.match.params.userId)
      await this.props.getOrders(userId)
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const {orders} = this.props
    return(
      !orders
      ? <h1>no orders</h1>
      : <div>
          {orders.map(order => <div key={order.id}>{order.id}</div>)}
        </div> 
    )
  } 
}

const mapStateToProps = state => ({
    orders: state.orders
})

const mapDispatchToProps = dispatch => ({
  getOrders: id => dispatch(fetchOrdersForCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);