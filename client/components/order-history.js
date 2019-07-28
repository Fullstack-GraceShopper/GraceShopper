import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../store/user'
import {getOrders} from '../store/orders'
import {formatDate} from './utils'

const OrderHistory = ({orders, getOrderHistory}) => {
  
  const {pathname} = location
  const userId = pathname.split('/')[1]

  useEffect(() => {
    getOrderHistory(userId)
  }, [getOrderHistory])

  return !orders.length ? (
    <div className="center">
      <h4>You haven't placed any orders yet</h4>
      <Link to='/'>Start Shopping</Link>
    </div>
    ):(
    <table className="order-history center">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Date</td>
        </tr>   
        {orders.map(order => (
          <tr className="order-row" key={order.id}>
            <td>
              <Link to={`/${order.userId}/orders/${order.id}`} key={order.id}>
                {order.id}
              </Link>
            </td>
            <td>
              <h5>{formatDate(order)}</h5>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = ({orders}) => ({orders})

const mapDispatchToProps = dispatch => ({
  getOrderHistory: id => dispatch(getOrders(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)