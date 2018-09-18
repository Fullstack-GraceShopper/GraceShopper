import React from 'react'
import {connect} from 'react-redux'
import {fetchAllSocks} from '../store/socks'
import {Link} from 'react-router-dom'
const {shuffle, includesAny} = require('./utils')
const randomRelatedSock = 6

class RelatedSocks extends React.Component {
  async componentDidMount() {
    await this.props.getAllSocks()
  }

  render() {
    const {socks, mainSock} = this.props
    let randomRelatedSocks = shuffle(
      socks.filter(
        sock =>
          sock.id !== mainSock.id &&
          includesAny(sock.categories, mainSock.categories)
      )
    ).slice(0, randomRelatedSock)

    return randomRelatedSocks.length ? (
      <div>
        <h3 id="customers-also-liked">Our Customers Also Liked:</h3>
        <ul className="flex space-evenly no-padding">
          {randomRelatedSocks.map(sock => (
            <Link
              className="no-decoration black"
              onClick={window.scrollTo(0, 0)}
              key={sock.id}
              to={`/socks/${sock.id}`}
            >
              <li className="center related-sock-image" key={sock.id}>
                <img className="related-sock-image" src={sock.photos[0]} />
                <p id="related-sock-name" className="wrap-word center">
                  {sock.name.toUpperCase()}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    ) : (
      <p>No related socks in stock :(</p>
    )
  }
}

const mapStateToProps = state => ({
  socks: state.socks
})

const mapDispatchToProps = {
  getAllSocks: fetchAllSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedSocks)
