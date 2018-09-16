import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchOrderHistory} from '../store/orders'
import axios from 'axios';

const formatDate = order => {
  let date = order.createdAt.slice(0,10).split('-')
  console.log('DATE:  ', date)
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
      : <div>
          {orderHistory.map(order => {
            return (
              <div key={order.id}>
                <br/>
                <Link key={order.id} 
                  to={`/${order.userId}/order-history/${order.id}`}
                >{order.id}</Link>
                <h5>{formatDate(order)}</h5>
              </div>
            )
          })}
        </div> 
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