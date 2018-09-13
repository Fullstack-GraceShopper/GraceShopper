import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchSock } from '../store/socks'

const mapStateToProps = state => ({
  sock: state.socks[0]
});

const mapDispatchToProps = dispatch => ({
  getSock: () => {
    dispatch(fetchSock())
  }
});

class SingleSock extends Component{

  componentDidMount() {
    this.props.getSock();
  }

  render() {
    const sock = this.props.match.params.sock;
    console.log('SOCK !@#$!@#$ ', sock)
    return (
      <div>{sock}</div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock);