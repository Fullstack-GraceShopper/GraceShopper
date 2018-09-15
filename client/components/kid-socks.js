import React from 'react'
import {connect} from 'react-redux'
import {fetchKidSocks} from '../store/socks'
import {Link} from 'react-router-dom'
import CategoryMenu from './category-menu';
import {SockList} from './sock-list'

class KidSocks extends React.Component {
  async componentDidMount() {
    await this.props.getKidSocks()
  }
  render() {
    const {kidSocks} = this.props

    return (
      <div className="flex column center container-space-around">
      <CategoryMenu onClick={() => {}}/>
        <div className="flex center category-header">
          <h1>Kids Sock</h1>
        </div>

        <div>
          {kidSocks.length > 0 ? (
            <SockList relevantSocks={kidSocks} />
          ) : (
            <div> There are no sock registered to the database </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  kidSocks: state.socks
})

const mapDispatchToProps = {
  getKidSocks: fetchKidSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(KidSocks)
