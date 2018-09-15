import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchOrderHistory} from '../store/orders'
import axios from 'axios';

class OrderHistory extends Component {

  async componentDidMount () {
    const userId = this.props.user.id
    await this.props.getOrderHistory()
  }

  render() {
    const orderHistory = this.props.orders
    return(
      !orderHistory
      ? <h1>no orders</h1>
      : <div>
          {orderHistory.map(order => {
            return (
              <div key={order.id}>
                <Link key={order.id} 
                  to={`orders/${order.userId}/order-history`}
                >{order.id}</Link>
              </div>
            )
          })}
        </div> 
    )
  } 
}

const mapStateToProps = state => ({
  user: state.user,
  orders: state.orders
});

const mapDispatchToProps = {
  getOrderHistory: fetchOrderHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);