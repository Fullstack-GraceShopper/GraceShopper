import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import UserDropdown from './user-dropdown'
import CartIcon from './cart-icon'

const Navbar = ({isLoggedIn, user}) => (
  <div>
    <div className="top-header">
      <div>
        <Link id="logo" className="flex" to="/">
          <h1 id="logo-text">Sockr</h1>
        </Link>
      </div>
      {}
      <div>
        {isLoggedIn && !user.isGuest? (
          <div className="vert-center flex">
          <UserDropdown user={user} />
          <div className="vr bgw" />
            <Link className="top-header-link hover-light" to="/cart">
              <CartIcon />
            </Link>
          </div>
        ) : (
          <div className="vert-center flex">
            <div id='auth-link-container' className='flex column'>
              <Link className="top-header-link hover-light" to="/login">
                <div className="vert-center">LOGIN</div>
              </Link>
              <div id='signup-link' className='flex'>
                <p>New to Sockr?</p>
                <Link to="/signup" className="hover-light">SIGN UP</Link>
              </div>
            </div>
            <div className="vr bgw" />
            <Link className="top-header-link hover-light" to="/cart" />
            <Link className="top-header-link hover-light" to="/cart">
              <CartIcon />
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

const mapState = ({user}) => ({isLoggedIn: !!user.id, user})

const mapDispatch = dispatch => ({
  handleClick() {
    dispatch(logout())
  }
})

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
