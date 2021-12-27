import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import {me} from '../store/user'
import {Login, ShippingForm} from '../components'

class Shipping extends Component {
  constructor() {
    super()
    this.state = {
      addresses: []
    }
  }

  async componentDidMount() {
    try {
      await this.props.getUser()
      if(this.props.user) {
        const {data} = await axios.get(`/users/${this.props.user.id}/account-details/shipping`)
        if(data.length) console.log('data:  ', data)
        this.setState({
          addresses: data
        })
      }
    } catch(err) {
      console.error(err)
    }
  }

  render() {
    const {user} = this.props
    const {addresses} = this.state
    console.log('addresses:  ', addresses)

    return (
      <div>
        {!user.email || user.isGuest ? (
          <div>
            <Login />
            <p className="margin-left no-vrt-margin small-font">Login to use saved address</p>
            <ShippingForm />
          </div>
        ) : (
          <div>
{/*            {addresses.length
              ? addresses.map(address => {
                <div>address.street</div>
              }) : (
                <ShippingForm />
              )
            }*/}
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

