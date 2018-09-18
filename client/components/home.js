import React from 'react'

export const Home = props => {
  return (
    <div className="home-body-container column">

      <div className="flex center">
        <a id="home-popculture" className="home-category-background" href="http://localhost:8080/socks/category/popculture">         <div className="home-category-title">
              POPCULTURE
            </div>
        </a>

        <a id="home-athletic" className="home-category-background" href="http://localhost:8080/socks/category/athletic">
          <div className="home-category-title">
            ATHLETIC
          </div>
        </a>

      </div>

      <div className="flex center">
        <a id="home-funny" className="home-category-background" href="http://localhost:8080/socks/category/funny">
          <div className="home-category-title">
            FUNNY
          </div>
        </a>

        <a id="home-casual" className="home-category-background" href="http://localhost:8080/socks/category/casual">
          <div className="home-category-title">
            CASUAL
          </div>
        </a>
      </div>

    </div>
  )
}


export default Home
