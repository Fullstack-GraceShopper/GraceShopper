import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {connect} from 'react-redux'
import OrderHistory from './order-history'
const Arrow = '▼'

const UserDropdown = ({user, handleLogout}) => {

  const [formState, setFormState] = useState(false)
  const toggleForm = () => setFormState(!formState)

  return (
    <div>
      <button id="user-icon" className="flex column" type="button" onClick={toggleForm}>
        <p>Hello {user.email}</p>
        <div className="flex row">
          <p>Account Details</p>
          <p>{Arrow}</p>
        </div>
      </button>
      {formState && (
        <ul id="user-dropdown" className="no-decoration">
          <li>
            <Link to={`/${user.id}/account`}
              className="no-decoration black">
              Account
            </Link>
          </li>
          <li>
            <Link to={`/${user.id}/orders`}
              className="no-decoration black">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/"
              onClick={handleLogout}
              className="no-decoration black">
              Logout
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

const mapDispatch = {
  handleLogout: logout
}

export default connect(null, mapDispatch)(UserDropdown)
