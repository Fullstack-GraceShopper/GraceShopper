const faker = require('faker');

const {bgMagenta, red} = require('chalk');
const db = require('./server/db');
const {Sock, User} = require('./server/db/models')

const seed = async (num) => {
  await db.sync({force: true})

  for(let i = 0; i < num; i++){
    await Sock.create({
      photos: ['https://cdn.shopify.com/s/files/1/0234/4461/products/Antler-Pug-Crew-Sock-Green-by-Socksmith_2584b175-3da5-4dba-a49d-13bc4e134004_2048x.jpg?v=1478021550'],
      name: faker.fake("{{commerce.productName}}"),
      price: faker.fake("{{commerce.price}}"),
      // OB/JL: listen to your linter (update the code OR change your .eslintrc, or change per file settings)
      isAdult: boolGen([3,10]),
      sizes: arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5),
      category: arrGen(['dress','casual','athletic','popculture','funny'], 5)});


    await User.create({
      email:  faker.fake("{{internet.email}}"),
      password: faker.fake("{{internet.password}}"),
      photo: faker.fake("{{image.avatar}}"),
      address: faker.fake("{{address.state}}, {{address.zipCode}}, {{address.streetAddress}}"),
    });
  }
  console.log(bgMagenta('Seeding success!'))
  db.close()
}

// ==> MISC RANDOM GENERATORS <== //

const boolGen = (odds) => {
  // odds is an array... ex ==> [3,10] = 3/10
  if (randomGenerator(odds[1]) > odds[0]) {
    return true;
  } else {
    return false;
  }
}

const arrGen = (options, maxOptions) => {
  let output = [];
  for (let i = 0; i < randomGenerator(maxOptions); i ++) {
    output.push(options[randomGenerator(options.length)])
  };
  return output
}

const randomGenerator = (max) => {
  return Math.floor(Math.random() * Math.floor(max - 1)) + 1;
}

seed(20)
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })

