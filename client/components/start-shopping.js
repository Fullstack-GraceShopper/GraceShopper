import React from 'react'
import {Link} from 'react-router-dom'

const StartShopping = () => {
  return (
    <div className='center'>
      <p>No Socks In Cart...</p>
      <Link to="/">
        <button>
          <h1 className="center">Start Shopping!</h1>
        </button>
      </Link>
    </div>
  )
}

module.exports = StartShopping
