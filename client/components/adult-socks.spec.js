import React from 'react'
import {expect} from 'chai'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AdultSocks} from './adult-socks.js'
import CategoryMenu from './category-menu'
import {fetchAdultSocks} from '../store/socks'

Enzyme.configure({
  adapter: new Adapter()
});

function setup() {
  const enzymeWrapper = shallow( <AdultSocks getAdultSocks={(fetchAdultSocks)} adultSocks={[]}/> )
    return {
      enzymeWrapper
    }
  }

describe('components', () => {
  describe.only('AdultSocks', () => {
    it('should render self and subcomponents', () => {
      const {
        enzymeWrapper
      } = setup()
      expect(enzymeWrapper.find(CategoryMenu)).to.have.lengthOf(1)
      expect(enzymeWrapper.find('h1').text()).to.be.equal('Adults Sock')
    })
  })
})
