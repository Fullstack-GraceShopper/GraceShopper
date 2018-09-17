import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postOrder} from '../store/orders'

class OrderButton extends Component {
  // handleClick = async (evt) => {
  //   evt.preventDefault();
  //   try {
  //     const userId = this.props.user.id
  //     const sockId = this.props.sockId
  //     await this.props.addOrder(userId, sockId)
  //   } catch(err) {
  //       console.log(err);
  //   }
  // }
  render() {
    return (
      <button onClick={this.handleClick} type="submit">
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
