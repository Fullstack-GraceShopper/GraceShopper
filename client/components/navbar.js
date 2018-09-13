import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, userPhoto, user}) => (
  <div>
    <div className="top-header">
      <div>
        <Link to="/">
          <h1 id="logo-text">Sockr</h1>
        </Link>
      </div>
      {
        console.log(user)
      }
      <div>
        {isLoggedIn ? (
          <div className="vert-center">
            <img id="nav-photo" src={userPhoto}></img>
          </div>
        ) : (
          <div>
            <Link className="top-header-link vert-center hover-light" to="/login">
              Log In
            </Link>
            <Link className="top-header-link vert-center hover-light" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
    <nav>
      <div className="bottom-header">
        <Link className="no-decoration hover-light lower-link" to="/">
          HOME
        </Link>
        <Link className="no-decoration hover-light lower-link" to="/adults">
          ADULTS
        </Link>
        <Link className="no-decoration hover-light lower-link" to="/kids">
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
    user: state.user,
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
