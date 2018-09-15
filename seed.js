const faker = require('faker');

const {bgMagenta, red} = require('chalk');
const db = require('./server/db');
const {Sock, User} = require('./server/db/models')

// ==> MISC RANDOM GENERATORS <== //

const boolGen = (odds) => {
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

// ==> SEED DATA <== //

const seed = async (num) => {
  await db.sync({force: true})

  //Adult

  await Sock.create({
    photos: ['https://bit.ly/2xiUNu0'],
    name: 'Pink Geometry',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2xgF5A8'],
    name: 'Adidas Black 3-pack',
    price: 1599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['athletic', 'casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2OpAodY'],
    name: 'Cirrusly Comfy',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NgfGAQ'],
    name: 'Turtle \'Stache',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['funny', 'casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NEWQ5R'],
    name: 'Rainbow Knee-high',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2MztuBe'],
    name: 'Snoopy',
    price: 699,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['popculture', 'casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2QyEtxK'],
    name: 'NBA',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['athletic']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NSkJad'],
    name: 'Yoda',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['popculture', 'dress']
  })

  await Sock.create({
    photos: ['https://bit.ly/2MzEHSn'],
    name: 'Blue Red Plaid',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['dress']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NMzXx5'],
    name: 'Heather Grey Plaid',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['dress']
  })

  await Sock.create({
    photos: ['https://bit.ly/2MA0Qjo'],
    name: 'I\'m husky',
    price: 599,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: true,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['funny', 'casual']
  })

  //Kid

  await Sock.create({
    photos: ['https://bit.ly/2xiUNu0'],
    name: 'Kid Pink Geometry',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['casual']
  });

  await Sock.create({
    photos: ['https://bit.ly/2xgF5A8'],
    name: 'Kid Adidas Black 3-pack',
    price: 1099,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['athletic', 'casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2OpAodY'],
    name: 'Kid Cirrusly Comfy',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NgfGAQ'],
    name: 'Kid Turtle \'Stache',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['funny', 'casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NEWQ5R'],
    name: 'Kid Rainbow Knee-high',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2MztuBe'],
    name: 'Kid Snoopy',
    price: 499,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['popculture', 'casual']
  })

  await Sock.create({
    photos: ['https://bit.ly/2QyEtxK'],
    name: 'Kid NBA',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['athletic']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NSkJad'],
    name: 'Kid Yoda',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['popculture', 'dress']
  })

  await Sock.create({
    photos: ['https://bit.ly/2MzEHSn'],
    name: 'Kid Blue Red Plaid',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['dress']
  })

  await Sock.create({
    photos: ['https://bit.ly/2NMzXx5'],
    name: 'Kid Heather Grey Plaid',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['dress']
  })

  await Sock.create({
    photos: ['https://bit.ly/2MA0Qjo'],
    name: 'Kid I\'m Husky',
    price: 399,
    description: 'I have reset the sensors to scan for frequencies outside the usual range. By emitting harmonic vibrations to shatter the lattices. We will monitor and adjust the frequency of the resonators. He has this ability of instantly interpreting and extrapolating any verbal communication he hears. It may be due to the envelope over the structure, causing hydrogen-carbon helix patterns throughout. I\'m comparing the molecular integrity of that bubble against our phasers.',
    isAdult: false,
    sizes: [...new Set(arrGen([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 5))].sort((a, b) => a - b),
    categories: ['funny', 'casual']
  })

  console.log(bgMagenta('Seeding success!'))
  db.close()
}

seed(20)
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })

