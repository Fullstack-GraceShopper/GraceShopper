import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchSock } from '../store/socks'

class SingleSock extends Component{
    componentDidMount() {
        this.props.getSock();
    }
    render() {
        const sockId = this.props.match.params.sockId;
        console.log('SOCK !@#$!@#$ ', this.props.sock)
        return (
            <div>test</div>
        )
    }
}

const mapStateToProps = state => ({
  sock: state.socks[0]
});

const mapDispatchToProps = {
  getSock: fetchSock
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock);
