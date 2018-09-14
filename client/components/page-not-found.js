import React from 'react';
import {Link} from 'react-router-dom'

export const NotFound = () => (
  <div id="four-04">
    <h1 id="four04-text">404</h1>
    <h5 id="lost-four04">It seems you got lost...</h5>
    <div id="four04-home"><Link to="/" id="four04-link"className="no-decoration black">Return Home</Link></div>
  </div>
)


