import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {me} from '../store/user'
import OrderHistory from './order-history'

class AccountDetails extends Component {
  async componentDidMount(){
    await this.props.getUser()
  }

  render () {
    const {user} = this.props
    const {address} = user
    return (
      user.id ? <div className="center">
        <br/>
        <h1>Account Details</h1>
        <br/>
        <h3>Email Address:</h3> <p>{user.email}</p>
        <h3>Address:</h3>
        <div>
          {!address ? (
            <Link to={`/users/${user.id}/account-details/shipping`}>
              Please provide address in Shipping Info section
            </Link>
          ) : (
            <div>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <p>{address.zipCode}</p>
            </div>
          )}
        </div>
        <br/>
        <h3>Order History:</h3> <OrderHistory user={user}/>
      </div> : <div>Loading user details...</div>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = {
  getUser: me
}

export default connect(mapState, mapDispatch)(AccountDetails)
