import React from 'react'
import {Link} from 'react-router-dom'

export const SockList = props => {
  const {relevantSocks} = props

  return (
    <div className="flex row wrap flex-start container-space-around">
      {relevantSocks.map((sock, i) => {
        return (
          // OB: recommend using the id as key instead of index (to avoid potential bugs)
          <Link className="no-decoration black" key={i} to={`/socks/${sock.id}`}>
            <div className="sock-display-div">
              <img className="sock-image" src={sock.photos[0]} />
              <div>{sock.name}</div>
              <div>{`$ ${(sock.price / 100).toFixed(2)}`}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
