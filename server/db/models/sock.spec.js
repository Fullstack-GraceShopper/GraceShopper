/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Sock = db.model('sock')

describe('Sock model', () => {
    beforeEach(() => {
      return db.sync({force: true})
    })

    describe('succesfull creation', () => {
        let success

        beforeEach(async () => {
          success = await Sock.create({
            name: 'yeet sock',
            price: 1000,
            isAdult: true,
          });
        });
  
        it('creates socks aslong as the signup data is correct and all there', async () => {
          const socks = await Sock.findAll();
          expect(socks).to.have.lengthOf(1);
        })
      })
});