import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {connect} from 'react-redux'
import OrderHistory from './order-history'
const Arrow = '▼'

class UserDropdown extends Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.toggleForm = this.toggleForm.bind(this)
  }

  toggleForm() {
    this.setState(
      (state) => {
        return { showForm: !state.showForm }
      }
    )
  }

  render() {
    const {user, handleLogout} = this.props
    const email = user.isGuest ? 'Guest' : user.email
    return (
      <div>
        <button id="user-icon" className='flex column' type="button" onClick={this.toggleForm}>
          <p>Hello {email}</p>
          <div className='flex row'>
            <p>Account Details</p>
            <p>{Arrow}</p>
          </div>
        </button>

        {this.state.showForm && (
          <ul id="user-dropdown" className="no-decoration">
            <li>
              <Link to={`/users/${user.id}/account-details`} className="no-decoration black" user={user}>
                Account Details
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLogout}
                to="/"
                className="no-decoration black"
              >
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    )
  }
}

const mapDispatch = {
  handleLogout: logout
}

export default connect(null, mapDispatch)(UserDropdown)
