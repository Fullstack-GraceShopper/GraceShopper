/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Sock = db.model('sock')

describe('Socks route', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('GET all Adult Socks', () => {
    const sandleSock = 'sandle sock'

    //price might fail Sequelize Validation if:
    //your model is a Decimal instead of an Integer (in cents)

    beforeEach(() => {
      return Sock.create({
        name: sandleSock,
        price: 450,
        isAdult: true,
        sizes: [7,12]
      })
    })

    it('filters for Adult Socks', async () => {
      const res = await request(app)
        .get('/api/socks?isAdult=true')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(sandleSock)
    })
  })

  describe('GET all Kid Socks', () => {
    const caterpillarSock = 'caterpillar toes baby'

    beforeEach(() => {
      return Sock.create({
        name: caterpillarSock,
        price: 250,
        isAdult: false,
        sizes: [7,12]
      })
    })

    it('filters for Kid Socks', async () => {
      const res = await request(app)
        .get('/api/socks?isAdult=false')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(caterpillarSock)
    })
  })
}) 

