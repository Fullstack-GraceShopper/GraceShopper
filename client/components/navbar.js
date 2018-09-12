import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
      <div className='top-header'>
        <div className='top-header-children'>
          <Link to="/">
          <h1 id='logo-text'>Sockr</h1>
          </Link>
        </div>
        <div className='top-header-children'>
          <Link className="top-header-link hover-light" to="/login">Log In</Link>
          <Link className="top-header-link hover-light" to="/signup">Sign Up</Link>
        </div>
      </div>
    <nav>
      <div className='bottom-header'>
        <Link className='no-decoration hover-light lower-link' to="/">Home</Link>
        <Link className='no-decoration hover-light lower-link' to="/adults">Adults</Link>
        <Link className='no-decoration hover-light lower-link' to="/kids">Kids</Link>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
