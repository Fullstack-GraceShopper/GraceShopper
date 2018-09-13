import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {loggedIn} = props
  return (
    <div>
      {
        loggedIn ?
        <div>
          <h3>Welcome back!</h3>
        </div> :
        <div>
          <h3>Welcome!</h3>
        </div>
      }
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    loggedIn: state.user.email ? true : false
  }
}

export default connect(mapState)(Home)
