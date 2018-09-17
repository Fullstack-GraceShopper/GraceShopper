/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const agent = require('supertest')(app);

const Sock = db.model('sock')

describe('Sock routes', () => {
  let storedSocks
  const sockData = [
    {
      name: 'sandle sock',
      price: 450,
      isAdult: true,
      sizes: ["Large"]
    },
    {
      name: 'watermelon sock',
      price: 350,
      isAdult: false,
      sizes: ["Child Small", "Child Large"]
    },
    {
      name: 'guinea pig sock',
      price: 550,
      isAdult: true,
      sizes: ["Small", "Large"]
    }
  ];

  beforeEach(async () => {
    const createdSocks = await Sock.bulkCreate(sockData) // OB: think about using `{returning: true}`
    storedSocks = createdSocks.map(sock => sock.dataValues); // OB: don't need to do `.dataValues`
  });

  describe('GET /api/socks?isAdult=true', () => {
    it('serves up all Adult Socks', async () => {
      const res = await request(app)
        .get('/api/socks?isAdult=true')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(storedSocks[0].name)
    })
  })


  describe('GET /api/socks?isAdult=false', () => {
    const caterpillarSock = 'caterpillar toes baby'
    it('serves up all Kid Socks', async () => {
      const res = await request(app)
        .get('/api/socks?isAdult=false')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(storedSocks[1].name)
    })
  })

  describe('GET single Sock', () => {
    const caterpillarSock = 'caterpillar toes baby'

    beforeEach(() => {
      return Sock.create({
        name: caterpillarSock,
        price: 250,
        isAdult: false,
        sizes: [7,12]
      })
    })

    it('serves up a single Sock by its id', async () => {
      const response = await agent
        .get('/api/socks/3') // OB: using the id 3 here is a litle brittle
        .expect(200);
      expect(response.body.name).to.equal('guinea pig sock');
    })
  })
}) 

