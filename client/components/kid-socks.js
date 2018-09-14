import React from 'react'
import { connect } from 'react-redux'
import { fetchKidSocks } from '../store/socks'
import {Link} from 'react-router-dom'

class KidSocks extends React.Component {
  async componentDidMount () {
    await this.props.getKidSocks()
  }

  render () {
    const { kidSocks } = this.props

    return (
      <div className="flex column center container-space-around">
        <div className="flex center category-header">
          <h1>Kids Sock</h1>
        </div>

        <div>
          { kidSocks.length > 0
          ? <div className="flex row wrap">
              { kidSocks.map((sock) => { return (
                <Link key={sock.id} to={`/socks/${sock.id}`}>
                  <img className="sock-image" src={sock.photos[0]} />
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
    kidSocks: state.socks
  }
}

const mapDispatchToProps = {
  getKidSocks: fetchKidSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(KidSocks)
