import React from 'react'

export const Home = props => {
  return (
    <div className="home-body-container column">

      <div className="flex">
        <a id="home-popculture" className="home-page-sock-image" href="http://localhost:8080/socks/category/popculture">         
            POPCULTURE  
        </a>

        <a id="home-athletic" className="home-page-sock-image" href="http://localhost:8080/socks/category/athletic">
            ATHLETIC
        </a>
        
      </div>

      <div className="flex">
        <a id="home-funny" className="home-page-sock-image" href="http://localhost:8080/socks/category/funny">
            FUNNY
        </a>

        <a id="home-casual" className="home-page-sock-image" href="http://localhost:8080/socks/category/casual">
            CASUAL
        </a>
      </div>

    </div>
  )
}


export default Home
