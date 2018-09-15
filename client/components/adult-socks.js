import React from 'react'
import {connect} from 'react-redux'
import {fetchAdultSocks} from '../store/socks'
import CategoryMenu from './category-menu'
import {SockList} from './sock-list'

class AdultSocks extends React.Component {
  async componentDidMount() {
    await this.props.getAdultSocks()
  }
  render() {
    const {adultSocks} = this.props
    return (
      <div className="flex column center container-space-around">
        <CategoryMenu onClick={() => {}} />
        <div className="flex center category-header">
          <h1>Adults Sock</h1>
        </div>
        <div>
          {adultSocks.length > 0 ? (
            <SockList relevantSocks={adultSocks} />
          ) : (
            <div> There are no sock registered to the database </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  adultSocks: state.socks
})

const mapDispatchToProps = {
  getAdultSocks: fetchAdultSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(AdultSocks)
