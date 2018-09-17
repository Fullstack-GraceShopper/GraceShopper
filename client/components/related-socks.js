import React from 'react'
import {connect} from 'react-redux'
import {fetchAllSocks} from '../store/socks'
import {Link} from 'react-router-dom'

// OB: love this!
// OB: recommend you put this into another file (like a `utils` file)
const shuffle = a => {
  let newArr = a.slice()

  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
  }
  return newArr
}

// OB: this is O(n^2-ish) with Sets it could be O(n) (NOT IMPORTANT)
const includesAny = (arr1, arr2) => {
  const longArr = arr1.length >= arr2.length ? arr1 : arr2
  const shortArr = arr1.length < arr2.length ? arr1 : arr2
  for (let elem of shortArr) {
    if (longArr.includes(elem)) return true
  }
  return false
}

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
    ).slice(0, 6)
    // OB: magic number, name it

    return randomRelatedSocks.length ? (
      <div>
        <h3 id="customers-also-liked">Our Customers Also Liked:</h3>
        <ul className="flex space-evenly no-padding">
          {randomRelatedSocks.map(sock => (
            // OB: "bug" below, should be passing a function to `onClick`
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
