import React, {Component} from 'react'
import {connect} from 'react-redux';
import axios from 'axios';

class OrderHistory extends Component {

  async componentDidMount () {
    console.log('this:  ',this.props)
    const userId = this.props.user.id
    try { 
      await axios.get(`/api/orders/${userId}`);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log('after render:   ', this.props)
    return(
      <div>orders</div>
    )
  } 
}

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);