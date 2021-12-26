import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postOrder} from '../store/orders'

class OrderButton extends Component {
  render() {
    return (
      <button className="action-btn" onClick={this.handleClick} type="submit">
        Add To Cart
      </button>
    )
  }
};

const mapStateToProps = (state, ownProps)=> ({
  user: state.user,
  sockId: ownProps.sockId
});

const mapDispatchToProps = dispatch => ({
  addOrder: (userId, sockId) => dispatch(postOrder(userId, sockId))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderButton);
