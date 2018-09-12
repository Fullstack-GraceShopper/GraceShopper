import React from 'react'
import { connect } from 'react-redux'
import { fetchAdultSocks } from '../store/socks'

// OB/JL: beware of lowercase names for react components, can lead to bugs when you do `<adultSocks />` JSX will not think that `adulSocks` is a component but rather just a custom tag name
class adultSocks extends React.Component {
  async componentDidMount () {
    await this.props.getAdultSocks()
  }

  render () {
    const { adultSocks } = this.props

    return (
      <div>
        <div>
          <h1>Adult Sock</h1>
        </div>
        <br />
        <br />

        <div>
          { adultSocks.length > 0
          ? <div>
              { adultSocks.map(sock => { return (
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
    adultSocks: state.socks
  }
}

/*
OB/JL: shorthand form for mapDispatchToProps when all of the methods you are passing have the common structure

const mapDispatchToProps = dispatch => {
  return {
    // ...
    doThing: () => dispatch(doThingThunk())
    // ...
  };
};

You can instead do the object format:

const mapDispatchToProps = {
  doThing: doThingThunk
};
*/
const mapDispatchToProps = (dispatch) => {
  return {
    getAdultSocks: () => dispatch(fetchAdultSocks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(adultSocks)
