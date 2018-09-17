import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchOrderHistory} from '../store/orders'
import axios from 'axios';

const formatDate = order => {
  let date = order.createdAt.slice(0,10).split('-')
  const year = date.shift()
  date.push(year)
  return date.join('-')
}

class OrderHistory extends Component {
  async componentDidMount () {
    try {
      const userId = Number(this.props.user.id)
      await this.props.getOrderHistory(userId)
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const orderHistory = this.props.orders
    return(
      !orderHistory
      ? <h1>no orders</h1>
      : <table className="order-history">
          <thead>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Date</td>
            </tr>   
              {orderHistory.map(order => {
                return (
                  <tr className="orderRow" key={order.id}>
                    <td>
                      <Link key={order.id} 
                        to={`/${order.userId}/order-history/${order.id}`}
                      >{order.id}</Link>
                    </td>
                    <td>
                      <h5>{formatDate(order)}</h5>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table> 
    )
  } 
}

const mapStateToProps = state => ({
  orders: state.orders
})

const mapDispatchToProps = dispatch => ({
  getOrderHistory: id => dispatch(fetchOrderHistory(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);