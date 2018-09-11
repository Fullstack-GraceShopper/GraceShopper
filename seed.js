const faker = require('faker');

const {bgMagenta, red} = require('chalk');
const db = require('./server/db');
const {Sock} = require('./server/db/models')

const seed = async (num) => {
 await db.sync({force: true})

 for(let i = 0; i < num; i++){
   await Sock.create({
     photos: [faker.fake("{{image.technics}}")],
     name: faker.fake("{{commerce.productName}}"),
     price: faker.fake("{{commerce.price}}"),
     isAdult: true,
     sizes: [12, 6, 9, 4],
     category: [faker.fake("{{commerce.product}}")]})
 }

 console.log(bgMagenta('Seeding success!'))
 db.close()
}

seed(10)
 .catch(err => {
   console.error(red('Oh noes! Something went wrong!'))
   console.error(err)
   db.close()
 })