import React from 'react'
import {connect} from 'react-redux'
import {fetchSocksByCategory} from '../store/socks'
import {Link} from 'react-router-dom'
import CategoryMenu from './category-menu';

class CategorySocks extends React.Component {

  async componentDidMount () {
    const category = this.props.match.params.category
    await this.props.getMatchingSocks(category)
  }

  render () {
    const {categorySocks} = this.props
    let categoryName = this.props.match.params.category
    categoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1)

    return (
      <div className="flex column center container-space-around">
        <CategoryMenu />
        <div className="flex center category-header">
          <h1>{categoryName} Sock</h1>
        </div>

        <div>
          { categorySocks.length > 0
          ? <div className="flex row wrap flex-start container-space-around">
              { categorySocks.map((sock, i) => { return (
                <Link key={i} to={`/socks/${sock.id}`}>
                  <div className='sock-display-div'>
                    <img className="sock-image" src={sock.photos[0]} />
                    <div>{sock.name}</div>
                    <div>{`$ ${(sock.price/100).toFixed(2)}`}</div>
                  </div>
                </Link>)
              })}
            </div>
          : <div> There are no sock registered to the database </div>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categorySocks: state.socks
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getMatchingSocks: category => {
      dispatch(fetchSocksByCategory(category))}
})

export default connect(mapStateToProps, mapDispatchToProps)(CategorySocks)
