import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSock} from '../store/socks'
import {SizeDropdown} from './size-dropdown'
import {QuantityDropdown} from './quantity-dropdown'
import RelatedSocks from './related-socks'

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
        <div className="flex">
          <br />
          <div>
            <img id="single-page-photo" src={sock.photos[0]} />
          </div>
          <br />
          <div>
            <h1 className="slight-padding single-page-label">
              {sock.name.toUpperCase()}
            </h1>
            <p className="slight-padding" id="single-price">{`$${(
              sock.price / 100
            ).toFixed(2)}`}</p>
            <h3 className="slight-padding single-page-label">
              Item Description
            </h3>
            <p className="slight-padding">{sock.description}</p>
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
        {!sock.categories ? <div /> : <RelatedSocks mainSock={sock} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sock:
      state.socks.length === 1
        ? state.socks[0]
        : state.socks.find(
            item => item.id === Number(ownProps.match.params.sockId)
          )
  }
}

const mapDispatchToProps = dispatch => ({
  getSock: id => dispatch(fetchSock(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleSock)
