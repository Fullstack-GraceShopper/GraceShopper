import React from 'react'
import { connect } from 'react-redux'
import { fetchKidSocks } from '../store/socks'

class kidSocks extends React.Component {
  async componentDidMount () {
    await this.props.getKidSocks()
  }

  render () {
    const { socks } = this.props

    return (
      <div>
        <div>
          <h1>Kid Sock</h1>
        </div>
        <br />
        <br />

        <div>
          { socks.length > 0
          ? <div>
              { socks.map(sock => { return (
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
    getKidSocks: () => dispatch(fetchKidSocks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(kidSocks)
