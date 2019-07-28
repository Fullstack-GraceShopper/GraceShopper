import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getOrder} from '../store/orders'

const Order = ({user, order, location, getCurrentOrder}) => {

  const {pathname} = location
  const id = pathname.split('/')[3]

  useEffect(() => {
    getCurrentOrder(id)
  }, getCurrentOrder)

  return (
    <div>
      <h4>Order No:    {order.id}</h4>
      <h4>Account Email:    {user.email}</h4> 
    </div>
  )
}

const mapStateToProps = ({user, orders}) => ({user, order: orders})

const mapDispatchToProps = dispatch => ({
  getCurrentOrder: id => dispatch(getOrder(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)