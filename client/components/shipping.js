import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addShippingInfo} from '../store/user'
import {Login} from '../components'

class Shipping extends Component {

  render() {
    console.log(this.props)
    const {name, displayName, handleSubmit, error, location} = this.props
    // {!user && <Login />}

    return (
      <div>
        
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

