import React from 'react'
import {hot} from 'react-hot-loader'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default hot(module)(App)
