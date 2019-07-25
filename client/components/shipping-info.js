import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {signUp} from '../store'

const ShippingInfo = ({name, displayName, handleSubmit, error}) => (
  <div>
    <form onSubmit={handleSubmit} name={name}>
      <div>
        <label htmlFor="address">
          <small>Address</small>
        </label>
        <input name="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">
          <small>City</small>
        </label>
        <input name="city" type="text" />
      </div>
      <div>
        <label htmlFor="address">
          <small>State</small>
        </label>
        <input name="state" type="text" />
      </div>
      <div>
        <button type="submit">{displayName}</button>
      </div>
    </form>
  </div>
)

export default connect(null, null)(ShippingInfo)
