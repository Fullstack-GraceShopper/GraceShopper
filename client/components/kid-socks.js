import React from 'react'
import {connect} from 'react-redux'
import {fetchKidSocks} from '../store/socks'
import {Link} from 'react-router-dom'
import CategoryMenu from './category-menu';

class KidSocks extends React.Component {
  async componentDidMount () {
    await this.props.getKidSocks()
  }

  render () {
    const { kidSocks } = this.props

    return (
      <div className="flex column center container-space-around">
      <CategoryMenu />
        <div className="flex center category-header">
          <h1>Kids Sock</h1>
        </div>

        <div>
          { kidSocks.length > 0
          ? <div className="flex row wrap container-space-around">
              { kidSocks.map((sock, i) => { return (
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
  kidSocks: state.socks
})

const mapDispatchToProps = {
  getKidSocks: fetchKidSocks
}

export default connect(mapStateToProps, mapDispatchToProps)(KidSocks)
