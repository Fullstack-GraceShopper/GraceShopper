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
          // OB: maybe put the DB update in here so that if it fails you'll see this `it`s label
          const socks = await Sock.findAll();
          // OB: if so, the `.findAll` might just test that sequelize is working
          expect(socks).to.have.lengthOf(1);
        })
        // OB: test negative space, where things SHOULD fail
      })
});