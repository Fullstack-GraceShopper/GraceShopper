import React from 'react'
import {connect} from 'react-redux'

const Order = () => {
  return (
    <div>
      <h2>Current Order</h2>
    </div>
  )
}

const mapStateToProps = ({user, orders}) => ({user, orders})

export default connect(mapStateToProps, null)(Order)