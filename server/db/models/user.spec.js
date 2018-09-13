/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')
const faker = require('faker')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {

    describe('succesfull creation', () => {
      let success

      beforeEach(async () => {
        success = await User.create({
          email: 'sockMan@radNasy.edu',
          password: 'thighhigh',
          address: faker.fake('{{address.streetAddress}}'),
        });
      });

      it('creates users aslong as the signup data is correct and all there', async () => {
        const users = await User.findAll();
        expect(users).to.have.lengthOf(1);
      })
    })

    describe('correctPassword', () => {
      let cody

      beforeEach(async () => {
        cody = await User.create({
          email: 'cody@puppybook.com',
          password: 'bones',
          address: faker.fake('{{address.streetAddress}}'),
        })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
