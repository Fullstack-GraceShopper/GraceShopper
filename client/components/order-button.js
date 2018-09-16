import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postOrder} from '../store/orders'
import axios from 'axios';

class OrderButton extends Component {
  handleClick = async (evt) => {
    evt.preventDefault();
    try {
      const userId = this.props.user.id
      await this.props.addOrder(userId)
    } catch(err) {
        console.log(err);
    }
  }
  render() {
    return (
      <button onClick={this.handleClick} type="submit">
        Add To Cart
      </button>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addOrder: id => dispatch(postOrder(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);