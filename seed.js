const faker = require('faker');
const {green, red} = require('chalk');
const db = require('./server/db');
const {Sock} = ('./server/db')

const seed = async () => {
  await db.sync({force: true})

  await Sock.create({
    photos: [faker.fake("{{image.technics}}")],
    name: faker.fake("{{commerce.productName}}"),
    price: faker.fake("{{commerce.price}}"),
    isAdult: true,
    sizes: [12, 6, 9, 4],
    category: faker.fake("{{commerce.product}}")})

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })



