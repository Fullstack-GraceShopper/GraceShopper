import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchOrders} from '../store/orders'
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
    const orders = this.props.orders
    return(
      !orders
      ? <h1>no orders</h1>
      : <div>
          {orders.map(order => order.id)}
        </div> 
    )
  } 
}

const mapStateToProps = state => {
  // console.log('STATE:   ', state)
  return {
    orders: state.orders
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log('OWNPROPS:   ', ownProps)
  return {
    getOrderHistory: id => dispatch(fetchOrderHistory(id))
  }  
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);