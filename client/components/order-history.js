import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getOrders} from '../store/orders'
import {formatDate} from './utils'

const OrderHistory = ({user, orders, getOrderHistory}) => {

  const userId = Number(user.id)

  useEffect(() => {
    getOrderHistory(userId)
  }, [getOrderHistory])

  return !orders.length ? (
    <div>
      <h4>You haven't placed any orders yet</h4>
      <Link to='/'>Start Shopping</Link>
    </div>
    ):(
    <table className="order-history">
      <thead>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Date</td>
        </tr>   
        {orders.map(order => (
            <tr className="orderRow" key={order.id}>
              <td>
                <Link to={`/${order.userId}/orders/${order.id}`} key={order.id}>
                  {order.id}
                </Link>
              </td>
              <td>
                <h5>{formatDate(order)}</h5>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table> 
  )
}

const mapStateToProps = ({orders}) => ({orders})

const mapDispatchToProps = dispatch => ({
  getOrderHistory: id => dispatch(getOrders(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)