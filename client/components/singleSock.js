import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchSock } from '../store/socks'

class SingleSock extends Component{
  async componentDidMount() {
    try {
      const sockId = Number(this.props.match.params.sockId)
      await this.props.getSock(sockId);
    } catch(error) {
      console.error(error)
    }
  }

  render() {
    const {sock} = this.props
    return (
      !sock
      ? <div>no sock</div>
      : (
        <div>
          <h1>{sock.name}</h1>
          <img src={sock.photos[0]}/>
          <h2>Available Sizes:</h2>
            <div>
              {!sock.sizes
              ? <h3>No Sizes</h3>
              : <ul>
                  {sock.sizes.map((size, i) => {
                    return <li key={i} >{size}</li>
                  })}
                </ul>
              }
            </div>
        </div>
      )    
    )
  }
}

const mapStateToProps = state => ({
    sock: state.socks[0]
})

const mapDispatchToProps = dispatch => ({
  getSock: (id) => dispatch(fetchSock(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock);