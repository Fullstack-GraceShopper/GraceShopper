import React from 'react'
import {connect} from 'react-redux'
import {fetchSocksByCategory} from '../store/socks'
import {Link} from 'react-router-dom'
import CategoryMenu from './category-menu';

import {SockList} from './sock-list'

class CategorySocks extends React.Component {
  constructor() {
    super();
    this.state = {
      currentCategory: '',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const category = this.props.match.params.category
    await this.props.getMatchingSocks(category)
  }
  async handleClick (newCategory) {
      await this.props.getMatchingSocks(newCategory)
  }
  render() {
    const {categorySocks} = this.props
    let categoryName = this.props.match.params.category
    categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)

    return (
      <div className="flex column center container-space-around">
        <CategoryMenu onClick={this.handleClick}/>
        <div className="flex center category-header">
          <h1>{categoryName} Sock</h1>
        </div>

        <div>
          {categorySocks.length > 0 ? (
            <SockList relevantSocks={categorySocks} />
          ) : (
            <div> There are no sock registered to the database </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  categorySocks: state.socks
})

const mapDispatchToProps = (dispatch) => ({
  getMatchingSocks: category => {
    dispatch(fetchSocksByCategory(category))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategorySocks)
