import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signUp} from '../store'

const SignUp = ({name, displayName, handleSubmit, error}) => (
  <div>
    <form onSubmit={handleSubmit} name={name}>
      <div>
        <label htmlFor="email">
          <small>Email</small>
        </label>
        <input name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">
          <small>Password</small>
        </label>
        <input name="password" type="password" />
      </div>
      <div>
        <button type="submit">{displayName}</button>
      </div>
      {error && error.response && <div> {error.response.data} </div>}
    </form>
  </div>
)

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(signUp(email, password))
    }
  }
}

export const SignUpForm = connect(mapSignup, mapDispatch)(SignUp)

SignUpForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
