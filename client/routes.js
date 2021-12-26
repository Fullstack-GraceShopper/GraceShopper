import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, SignUpForm, Home} from './components'
import {me} from './store'
import AdultSocks from './components/adult-socks';
import KidSocks from './components/kid-socks';
import SingleSock from './components/single-sock';
import {NotFound} from './components/page-not-found';
import AccountDetails from './components/account-details';
import CategorySocks from './components/category-socks';
import OrderHistory from './components/order-history'
import OrderList from './components/order-list'
import ShippingForm from './components/shipping-form'
import Shipping from './components/shipping'
import Cart from './components/cart'
import StripeForm from './components/stripe'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props
    const accountDetailPath = isLoggedIn ? <Route exact path="/users/:userId/account-details" component={AccountDetails} /> : null;

    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/adults" component={AdultSocks} />
        <Route exact path="/kids" component={KidSocks} />
        <Route exact path="/socks/category/:category" component={CategorySocks} />
        <Route exact path="/socks/:sockId" component={SingleSock} />
        <Route exact path="/users/:userId/orders" component={OrderHistory} />
        <Route exact path="/users/:userId/account-details/shipping" component={ShippingForm} />
        <Route exact path="/checkout/shipping/" component={Shipping} />        
        <Route exact path="/stripe" component={StripeForm} />
        {accountDetailPath}
        <Route component={NotFound} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
