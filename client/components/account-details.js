import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {me} from '../store/user'
import OrderHistory from './order-history'

const AccountDetails = ({user, getUser}) => {

  useEffect(() => {
    getUser()
  }, [getUser])

  return (
    user.id ? <div className="center">
      <br/>
      <h1>Account Details</h1>
      <br/>
      <h3>Email Address:</h3> <p> {user.email}</p>
      <h3>Address:</h3> <p></p>
    </div> : <div>Loading user details...</div>
  )
}

const mapState = ({user}) => ({user})

const mapDispatch = {
  getUser: me
}

export default connect(mapState, mapDispatch)(AccountDetails)
