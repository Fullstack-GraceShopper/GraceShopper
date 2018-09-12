import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
      <div>
        <Link to="/">
        <h1>Sockr</h1>
        </Link>
        <Link to="/login">Log In   </Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/adults">Adults</Link>
        <Link to="/kids">Kids</Link>
        {//logout link should only be rendered while logged in
          //<a href="#" onClick={handleClick}>
            //Logout
          //</a>
        }
      </div>
    </nav>
    <hr />
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
