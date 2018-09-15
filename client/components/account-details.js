import React, { Component } from 'react';
import {connect} from 'react-redux';
import {me} from '../store/user';

class AccountDetails extends Component {
  async componentDidMount(){
    await this.props.getUser();
  }

  render () {
    const { user } = this.props;
    return (
      user.id ? <div className="center">
        <h1>Account Details</h1>
        <h3>Email Address:</h3> <p> {user.email}</p>
        <h3>Address:</h3> <p> {user.address}</p>
        <h3>Order History:</h3> <p>TBD</p>
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
