import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addShippingInfo} from '../store/user'
import {Login, ShippingForm} from '../components'

class Shipping extends Component {

  render() {
    console.log(this.props)
    const {user} = this.props
    console.log(user)
    return (
      <div>
        {!user || user.isGuest ? (
          <div>
            <Login />
            <p className="margin-left no-vrt-margin small-font">Login to use saved address</p>
            <ShippingForm />
          </div>
        ) : (
          <div>
            Logged in
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  getUser: () => {
    dispatch(me)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)

