import React from 'react'
import { connect } from 'react-redux'
import { fetchAdultSocks } from '../store/socks'
import {Link} from 'react-router-dom'


class AdultSocks extends React.Component {
  async componentDidMount () {
    await this.props.getAdultSocks()
  }
  render () {
    const { adultSocks } = this.props

    return (
      <div>
        <div>
          <h1>Adult Sock</h1>
        </div>
        <br/>
        <br/>

        <div>
          { adultSocks.length > 0
          ? <div>
              { adultSocks.map(sock => { return (
                <Link key={sock.id} to={`/socks/${sock.id}`}>
                  <img src={sock.photos[0]} />
                  <div>{sock.name}</div>
                  <div>{sock.price}</div>
                </Link>)
              })}
            </div>
          : <div> There are no sock registered to the database </div>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adultSocks: state.socks
  }
}


const mapDispatchToProps = {
  getAdultSocks: fetchAdultSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(AdultSocks)
