import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import UserDropdown from './user-dropdown'

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
          <div className="vr" />
            <Link className="top-header-link hover-light" to="/asdf">
              <svg xmlns="http://www.w3.org/2000/svg" className="vert-center" width="64" height="64">
                <g>
                  <title>background</title>
                  <rect
                    fill="none"
                    id="canvas_background"
                    height="402"
                    width="582"
                    y="-1"
                    x="-1"
                  />
                </g>
                <g>
                  <title>Layer 1</title>
                  <path
                    stroke="null"
                    fill="#ffffff"
                    id="Fill-110"
                    d="m48.5,45.7l-30.3,0c-0.5,0 -0.9,-0.2 -1.1,-0.6c-0.3,-0.4 -0.3,-0.9 -0.1,-1.3l2.6,-6.6l-2.6,-24.6l-8.4,0l0,-2.8l9.6,0c0.7,0 1.3,0.5 1.4,1.2l2.8,26.1c0,0.2 0,0.4 -0.1,0.7l-2,5l28.2,0l0,2.9"
                    className="st0 hover-light"
                  />
                  <path
                    fill="#ffffff"
                    id="Fill-111"
                    d="m21.3,38.8l-0.6,-2.7l31.9,-6.6l0,-11.3l-33,0l0,-2.8l34.4,0c0.8,0 1.4,0.6 1.4,1.4l0,13.8c0,0.7 -0.5,1.2 -1.1,1.3l-33,6.9"
                    className="st0"
                  />
                  <path
                    fill="#ffffff"
                    id="Fill-112"
                    d="m49.9,54c-3,0 -5.5,-2.5 -5.5,-5.5s2.5,-5.5 5.5,-5.5c3,0 5.5,2.5 5.5,5.5s-2.5,5.5 -5.5,5.5l0,0zm0,-8.3c-1.5,0 -2.8,1.2 -2.8,2.8s1.2,2.8 2.8,2.8s2.8,-1.2 2.8,-2.8s-1.3,-2.8 -2.8,-2.8l0,0z"
                    className="st0"
                  />
                  <path
                    fill="#ffffff"
                    id="Fill-113"
                    d="m16.9,54c-3,0 -5.5,-2.5 -5.5,-5.5s2.5,-5.5 5.5,-5.5s5.5,2.5 5.5,5.5s-2.5,5.5 -5.5,5.5l0,0zm0,-8.3c-1.5,0 -2.8,1.2 -2.8,2.8s1.2,2.8 2.8,2.8s2.8,-1.2 2.8,-2.8s-1.3,-2.8 -2.8,-2.8l0,0z"
                    className="st0"
                  />
                </g>
              </svg>
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
            <div className="vr" />
            <Link className="top-header-link hover-light" to="/asdf">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                <g>
                  <title>background</title>
                  <rect
                    fill="none"
                    id="canvas_background"
                    height="402"
                    width="582"
                    y="-1"
                    x="-1"
                  />
                </g>
                <g>
                  <title>Layer 1</title>
                  <path
                    stroke="null"
                    fill="#ffffff"
                    id="Fill-110"
                    d="m48.5,45.7l-30.3,0c-0.5,0 -0.9,-0.2 -1.1,-0.6c-0.3,-0.4 -0.3,-0.9 -0.1,-1.3l2.6,-6.6l-2.6,-24.6l-8.4,0l0,-2.8l9.6,0c0.7,0 1.3,0.5 1.4,1.2l2.8,26.1c0,0.2 0,0.4 -0.1,0.7l-2,5l28.2,0l0,2.9"
                    className="st0 hover-light"
                  />
                  <path
                    fill="#ffffff"
                    id="Fill-111"
                    d="m21.3,38.8l-0.6,-2.7l31.9,-6.6l0,-11.3l-33,0l0,-2.8l34.4,0c0.8,0 1.4,0.6 1.4,1.4l0,13.8c0,0.7 -0.5,1.2 -1.1,1.3l-33,6.9"
                    className="st0"
                  />
                  <path
                    fill="#ffffff"
                    id="Fill-112"
                    d="m49.9,54c-3,0 -5.5,-2.5 -5.5,-5.5s2.5,-5.5 5.5,-5.5c3,0 5.5,2.5 5.5,5.5s-2.5,5.5 -5.5,5.5l0,0zm0,-8.3c-1.5,0 -2.8,1.2 -2.8,2.8s1.2,2.8 2.8,2.8s2.8,-1.2 2.8,-2.8s-1.3,-2.8 -2.8,-2.8l0,0z"
                    className="st0"
                  />
                  <path
                    fill="#ffffff"
                    id="Fill-113"
                    d="m16.9,54c-3,0 -5.5,-2.5 -5.5,-5.5s2.5,-5.5 5.5,-5.5s5.5,2.5 5.5,5.5s-2.5,5.5 -5.5,5.5l0,0zm0,-8.3c-1.5,0 -2.8,1.2 -2.8,2.8s1.2,2.8 2.8,2.8s2.8,-1.2 2.8,-2.8s-1.3,-2.8 -2.8,-2.8l0,0z"
                    className="st0"
                  />
                </g>
              </svg>
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
