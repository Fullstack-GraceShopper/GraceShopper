import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSock} from '../store/socks'
import {Link} from 'react-router-dom'

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
          <br/>
          <img src={sock.photos[0]} height='300' width='300'/>
          <br/>
          <h2>Sizes:</h2>
            <div>
              {!sock.sizes
              ? <h3>No Sizes Available</h3>
              : <ul>
                  {sock.sizes.map((size, i) => {
                    return <li key={i} >{size}</li>
                  })}
                </ul>
              }
            </div>
            <br/>
            <div>
              {!sock.categories
              ? <div></div>
              : <div>
                  <h3>Categories:</h3>
                  <div>
                    {sock.categories.map((category, i) => {
                      const path = `/socks/${category}`
                      return <div key={i}>
                      <Link to={path}>{category}
                      </Link></div>
                    })}
                  </div>
                </div>
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
  getSock: id => dispatch(fetchSock(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock);