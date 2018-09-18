import React from 'react'
import {Link} from 'react-router-dom'

const StartShopping = () => {
  return (
    <div>
      <p>No Socks In Cart...</p>
      <Link to="/" className="w100">
        <button className="flex space-between">
          <h1 className="center">Start Shopping!</h1>
        </button>
      </Link>
    </div>
  )
}

module.exports = StartShopping
