import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSock} from '../store/socks'
import {Link} from 'react-router-dom'
import {SizeDropdown} from './size-dropdown'
import {QuantityDropdown} from './quantity-dropdown'

class SingleSock extends Component {
  async componentDidMount() {
    try {
      const sockId = Number(this.props.match.params.sockId)
      await this.props.getSock(sockId)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const {sock} = this.props
    return !sock ? (
      <div>no sock</div>
    ) : (
      <div>
        <div className="flex row">
          <br />
          <div>
            <img id="single-page-photo" src={sock.photos[0]} />
          </div>
          <br />
          <div>
            <h1 className="slight-padding single-page-label">{sock.name.toUpperCase()}</h1>
            <p className="slight-padding" id="single-price">{`$${(
              sock.price / 100
            ).toFixed(2)}`}</p>
            <h3 className="slight-padding single-page-label">
              Item Description
            </h3>
            {/* <p>{sock.description}</p> */}
            {sock.sizes ? (
              <div>
                <SizeDropdown sock={sock} />
                <QuantityDropdown />
              </div>
            ) : (
              <p>Out of Stock :(</p>
            )}
          </div>
        </div>
        {!sock.categories ? (
          <div />
        ) : (
          <div>
            <h3>Categories:</h3>
            <div>
              {sock.categories.map((category, i) => {
                const path = `/socks/category/${category}`
                return (
                  <div key={i}>
                    <Link to={path}>{category}</Link>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sock: state.socks[0]
})

const mapDispatchToProps = dispatch => ({
  getSock: id => dispatch(fetchSock(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock)
