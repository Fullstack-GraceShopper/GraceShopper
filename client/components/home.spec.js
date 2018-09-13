/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Home} from './home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home', () => {
  let home

  beforeEach(() => {
    home = shallow(<Home loggedIn={true} />)
  })

  it('renders diffrent render message depending on if user is logged in or not in an h3', () => {
    expect(home.find('h3').text()).to.be.equal('Welcome back!')
  })
})
