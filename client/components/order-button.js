import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postOrder} from '../store/orders'
import axios from 'axios';

class OrderButton extends Component {
  handleClick = async (evt) => {
    evt.preventDefault();
    this.props.addOrder()
  }

  render() {
    return (
        <button onClick={this.handleClick} type="submit">
            buy sock
        </button>
    )
  }
};

const mapStateToProps = state => ({
  order: state.order
});

const mapDispatchToProps = {
  addOrder: postOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);


  // checks if logged in 
        // if not logged in user guest user
        // else use users id