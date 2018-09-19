import React from 'react'
import {Link} from 'react-router-dom'

export const Home = props => {
  return (
    <div className="home-body-container column">

      <div className="flex center">
        <Link id="home-popculture" className="home-category-background" to="/socks/category/popculture">         
            <div className="home-category-title">
              POPCULTURE
            </div>
        </Link>

        <Link id="home-athletic" className="home-category-background" to="/socks/category/athletic">
          <div className="home-category-title">
            ATHLETIC
          </div>
        </Link>

      </div>

      <div className="flex center">
        <Link id="home-funny" className="home-category-background" to="/socks/category/funny">
          <div className="home-category-title">
            FUNNY
          </div>
        </Link>

        <Link id="home-casual" className="home-category-background" to="/socks/category/casual">
          <div className="home-category-title">
            CASUAL
          </div>
        </Link>
      </div>
    </div>
  )
}


export default Home
