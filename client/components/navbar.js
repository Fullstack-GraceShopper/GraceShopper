import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import UserDropdown from './user-dropdown'
import CartIcon from './cart-icon'

const Navbar = ({handleClick, isLoggedIn, userPhoto, user}) => (
  <div>
    <div className="top-header">
      <div>
        <Link to="/">
          <h1 id="logo-text">Sockr</h1>
        </Link>
      </div>
      {}
      <div>
        {isLoggedIn ? (
          <div className="vert-center flex">
          <UserDropdown user={user} />
          <div className="vr bgw" />
            <Link className="top-header-link hover-light" to="/cart">
              <CartIcon />
            </Link>
          </div>
        ) : (
          <div className="vert-center flex">
            <Link className="top-header-link hover-light" to="/login">
              <div className="vert-center">LOGIN</div>
            </Link>
            <Link className="top-header-link hover-light" to="/signup">
              <div className="vert-center">SIGN UP</div>
            </Link>
            <div className="vr bgw" />
            <Link className="top-header-link hover-light" to="/cart">
            </Link>
          </div>
        )}
      </div>
    </div>
    <nav>
      <div className="bottom-header">
        <Link className="no-decoration black hover-light lower-link" to="/">
          HOME
        </Link>
        <Link
          className="no-decoration black hover-light lower-link"
          to="/adults"
        >
          ADULTS
        </Link>
        <Link className="no-decoration black hover-light lower-link" to="/kids">
          KIDS
        </Link>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    userPhoto: state.user.photo,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
