import React from 'react'
import {connect} from 'react-redux'
import {fetchKidSocks} from '../store/socks'
import {Link} from 'react-router-dom'

class KidSocks extends React.Component {
  async componentDidMount () {
    await this.props.getKidSocks()
  }

  render () {
    const { kidSocks } = this.props

    return (
      <div>
        <div>
          <h1>Kids Sock</h1>
        </div>
        <div>
          {kidSocks.length > 0
          ? <div>
              {kidSocks.map((sock, i) => { return (
                <div key={i}>
                  <br/>
                  <br/>
                  <Link key={i} to={`/socks/${sock.id}`}>
                    <img src={sock.photos[0]} height='150' width='150' />
                    <div>{sock.name}</div>
                    <div>{`$ ${(sock.price/100).toFixed(2)}`}</div>
                  </Link>
                </div>
              )})}
            </div>
          : <div> There are no sock registered to the database </div>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  kidSocks: state.socks
})

const mapDispatchToProps = {
  getKidSocks: fetchKidSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(KidSocks)
