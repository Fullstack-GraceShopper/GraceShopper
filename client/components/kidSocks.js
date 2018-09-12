import React from 'react'
import { connect } from 'react-redux'
import { fetchSocks } from '../store/socks'

class kidSocks extends React.Component {
  async componentDidMount () {
    await this.props.getSocks()
  }

  render () {
    const { socks } = this.props
    const kidSocksArr = socks.filter(sock => sock.isAdult === false)

    return (
      <div>
        <div>
          <h1>Kids Sock</h1>
        </div>
        <br />
        <br />

        <div>
          { socks.length > 0
          ? <div>
              { kidSocksArr.map((sock) => { return (
                <div key={sock.id}>
                  <img src={sock.photos[0]} />
                </div>)
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
    socks: state.socks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSocks: () => dispatch(fetchSocks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(kidSocks)
