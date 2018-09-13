import React from 'react'
import { connect } from 'react-redux'
import { fetchKidSocks } from '../store/socks'

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
        <br />
        <br />

        <div>
          { kidSocks.length > 0
          ? <div>
              { kidSocks.map((sock) => { return (
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
    kidSocks: state.socks
  }
}

const mapDispatchToProps = {
    getKidSocks: fetchKidSocks()
}

export default connect(mapStateToProps, mapDispatchToProps)(KidSocks)
