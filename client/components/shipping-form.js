import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {addShippingInfo} from '../store/user'

class ShippingForm extends Component {

  render() {
    const {name, displayName, handleSubmit, error, location} = this.props

    return (
      <div>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="street">
              <small>Address</small>
            </label>
            <input name="street" type="text" />
          </div>
          <div>
            <label htmlFor="city">
              <small>City</small>
            </label>
            <input name="city" type="text" />
          </div>
          <div>
            <label htmlFor="state">
              <small>State</small>
            </label>
            <input name="state" type="text" />
          </div>
          <div>
            <label htmlFor="zipCode">
              <small>Zip Code</small>
            </label>
            <input name="zipCode" type="text" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
    userId: user.id
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const street = evt.target.street.value
      const city = evt.target.city.value
      const state = evt.target.street.value
      const zipCode = Number(evt.target.zipCode.value)
      const address = {
        street,
        city,
        state,
        zipCode
      }
      dispatch(addShippingInfo(address, ownProps.match.params.userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm)
