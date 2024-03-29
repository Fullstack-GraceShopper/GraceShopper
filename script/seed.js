const faker = require('faker');

const {bgMagenta, red} = require('chalk');
const db = require('../server/db');
const {Sock, User} = require('../server/db/models')

// ==> MISC RANDOM GENERATORS <== //

const boolGen = (odds) => {
  if (randomGenerator(odds[1]) > odds[0]) {
    return true;
  } else {
    return false;
  }
}

const sortUniqueSizes = (sizes) => [...new Set(arrGen(sizes, 5))].sort((a, b) => a - b)

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


  const data = [{
    photos: ['https://bit.ly/2xiUNu0'],
    name: 'Pink Geometry',
    price: 599,
    description: `Pink math is p sweet this sock is pink and has some geometry stuff`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['casual'],
  },
  {
    photos: ['https://bit.ly/2xgF5A8'],
    name: 'Adidas Black 3-pack',
    price: 1599,
    description: `Three individual black adidas socks`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['athletic', 'casual']
  },
  {
    photos: ['https://bit.ly/2OpAodY'],
    name: 'Cirrusly Comfy',
    price: 599,
    description: `veryyyyyyy comffyyyyyyyyy indeid`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['casual'],
  },
  {
    photos: ['https://bit.ly/2NgfGAQ'],
    name: 'Turtle \'Stache',
    price: 599,
    description: `Turtles are very cool and so are mustaches`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['funny', 'casual']
  },
  {
    photos: ['https://bit.ly/2NEWQ5R'],
    name: 'Rainbow Knee-high',
    price: 599,
    description: `Get that rainbow up to your knee with this sock`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['casual'],
  },
  {
    photos: ['https://bit.ly/2MztuBe'],
    name: 'Snoopy',
    price: 699,
    description: `Snoopy Snoopy Snoopy Snoopy Snoopy Snoopy Snoopy `,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['popculture', 'casual']
  },
  {
    photos: ['https://bit.ly/2QyEtxK'],
    name: 'NBA',
    price: 599,
    description: `Official socky of the National Basketball Assocktiation`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['athletic']
  },
  {
    photos: ['https://bit.ly/2MzEHSn'],
    name: 'Blue Red Plaid',
    price: 599,
    description: `This sock is blue......and red......and plaid indeede`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['dress']
  },
  {
    photos: ['https://bit.ly/2NMzXx5'],
    name: 'Heather Grey Plaid',
    price: 599,
    description: `Heather is the grey plaid sock that you see here please buy this sock if your name is heather`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['dress']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/81kOz-T75mL._UL1500_.jpg'],
    name: 'Black Dress Sock',
    price: 799,
    description: `Dress sock that is black for dressing up with socks that are black`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['dress']
  },
  {
    photos: ['https://ae01.alicdn.com/kf/HTB1HH7oRVXXXXXQapXXq6xXFXXXT/10-Pairs-Lot-Plus-Size-Black-White-Men-s-Dress-Socks-Autumn-Winter-Long-High-Thermal.jpg_640x640.jpg'],
    name: '5-pack Assorted Dress Socks',
    price: 2099,
    description: `Five individual dress socks with assortment of exactly five individual sock to choose from`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['dress']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/0673/5967/products/IMG_2749.jpg?v=1511712445'],
    name: 'Guitar Dress Sock',
    price: 999,
    description: `Dress sock with guitarrrr man sweet`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['dress']
  },
  {
    photos: ['https://s-media-cache-ak0.pinimg.com/originals/aa/64/ab/aa64abb96befd1a2cf47d7a386d2138d.jpg'],
    name: 'Penguin Dress Sock',
    price: 599,
    description: `Dress sock with penguins all about doing the penguin thing`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['dress','funny']
  },
  {
    photos: ['https://s7d2.scene7.com/is/image/academy/10249104?wid=500&hei=500'],
    name: 'Casual Outdoor Athletic Tube Sock',
    price: 599,
    description: `Ya`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['casual', 'athletic']
  },
  {
    photos: ['http://www.cn-sock.com/wp-content/uploads/2016/08/CGMS16007.jpg'],
    name: 'Striped Socky',
    price: 699,
    description: `Stripey sock with stripes. More stripes even still`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['casual', 'dress']
  },
  {
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdmBWykj0HEgkTF-6LyTNKcBUV01HjD9YhwC71l8cDqh1Gz9f'],
    name: '3-Pack Flower Socks',
    price: 1299,
    description: `Three individual flower socks with individual flower patternsock with `,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['casual'],
  },
  {
    photos: ['https://ae01.alicdn.com/kf/HTB1Wim_JFXXXXcfXVXXq6xXFXXXQ/One-Pairs-Free-shipping-Classic-black-white-gray-solid-color-socks-brand-quality-men-s-socks.jpg'],
    name: '3-Pack Casual Socky',
    price: 1299,
    description: `Three individual socky. Realy casualy`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['casual'],
  },
  {
    photos: ['http://s7d9.scene7.com/is/image/JCPenney/DP0409201417032914M'],
    name: '3-Pack Blue Bermuda Socks',
    price: 1499,
    description: `Three Individual Blue Bermuda socks. `,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['casual'],
  },
  {
    photos: ['https://www.innovateistore.com/resize/Shared/images/dr-comfort-ankle-socks-3.jpg?bw=1000&w=1000&bh=1000&h=1000'],
    name: 'Ankle Sock',
    price: 499,
    description: `Socky that is athletic style and can also be casual ya know`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['athletic', 'casual']
  },
  {
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksL4HQD-hYsei-etlL36gEoGuPJTM_PQEoUBG3GssUYe4UWHm'],
    name: 'Batman Athletic Sock',
    price: 599,
    description: `Sport is up with a bat that is a man that is a batman`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['athletic', 'popculture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/81PzeSS2EgL._SX425_.jpg'],
    name: 'White/Grey Athletic Sock',
    price: 599,
    description: `Athletic sock that is white and grey oh yay`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['athletic']
  },
  {
    photos: ['https://underarmour.scene7.com/is/image/Underarmour/1264048-967_GROUP?scl=1&fmt=jpg&qlt=70&wid=1064&hei=1240&size=958,1116&cache=on,off&bgc=f0f0f0&resMode=sharp2'],
    name: '3-Pack Under Armor Socks',
    price: 1099,
    description: `Three individual sockys by under armor nice`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['athletic']
  },
  {
    photos: ['https://images.sportsdirect.com/images/products/41802090_l.jpg'],
    name: '3-Pack Marvel Socks',
    price: 1299,
    description: `Three individual socks with marvel stuff on them cool ya`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/1390/4303/products/socks-marvel-deadpool-large-all-over-print-socks-1_2048x@2x.jpg?v=1500546931'],
    name: 'Deadpool Sock',
    price: 899,
    description: `Sock with Deadpool from the Marvel blockbusterrrr film Deadpool`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/1390/4303/products/socks-marvel-black-panther-waterprint-socks-4_580x@2x.jpg?v=1521636245'],
    name: 'Black Panther Sock',
    price: 899,
    description: `Black Panther movie sock  sweet`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fdngXD1kMQXDHh0Nl2syTdyJO6itdbK6vrlbJb0dQ1NH-LfY1g'],
    name: 'Xmen Sock',
    price: 799,
    description: `Sock Xmen movie sock  cool `,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['popculture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/716n%2BJB4U6L._UX385_.jpg'],
    name: 'Ironman Sock',
    price: 899,
    description: `Socky Iron man Movie v cool indeede`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/1390/4303/products/socks-marvel-spider-man-suit-up-athletic-socks-1_2048x@2x.jpg?v=1500547132'],
    name: 'Spiderman Socky',
    price: 699,
    description: `Sock with spidey on it `,
    isAdult: true,
    sizes: ["Medium"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn1.boldsocks.com/wp-content/uploads/product-photography/23936-Black-Grey-X-Men-Storm-Sublimated-Mens-Casual-Socks-BIOWORLD/images/23936-Black-Grey-X-Men-Storm-Sublimated-Mens-Casual-Socks-BIOWORLD13.jpg'],
    name: 'X-Men Storm Sock',
    price: 999,
    description: `Sock with Storm from X-Men nice 1`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://www.thesnowboardshop.co.uk/images/burton-weekend-socks-south-park-2-pack-p4523-10282_image.jpg'],
    name: 'Kyle South Park Sock',
    price: 799,
    description: `Sock with Kyle Broflovski from South Park`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['funny', 'popculture']
  },
  {
    photos: ['https://www.artistshot.com/assets/images/admin/product_design/2004674/cactuar-final-fantasy-socks-420x420.jpg'],
    name: 'Socktaur Final Fantasock',
    price: 959,
    description: `Cactaur sock from Final Fantasy that is now a socktaur`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/1390/4303/products/socks-harry-potter-hogwarts-vertical-socks-1_2048x@2x.jpg?v=1504532579'],
    name: 'Hogwarts Sock',
    price: 959,
    description: `Sock for students of Hogwarts like harry potter was and stuff`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/1390/4303/products/socks-star-trek-spock-3d-socks-1_2048x@2x.jpg?v=1496598472'],
    name: 'Star Trek 3-D S(p)ock',
    price: 799,
    description: `Spock is now sock is now three dimensional `,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['popculture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/61r7D94j4EL._UX385_.jpg'],
    name: 'Donkey Kong Sock',
    price: 799,
    description: `DK`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkIKxHNuQIhi_Kgn9KZLsOGMEFao8PDRYU1XGvUiUGcGE_1Y8Wyg'],
    name: 'Zelda Sock',
    price: 799,
    description: `Zelda sock like the video game zelda a character from the video game zelda is on the sock like in the vidya gam,e`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2PjVr7w2S3l3waMeoJNV6uIgmjC1570zyx71w1XTinVT70um'],
    name: 'Sock Hunt',
    price: 799,
    description: `sock hunt like duck hunt get it`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxEfPgBmV0E_2jZt1MJM3IxpNkDZaqs9mrmxjf7GPNs6GN-JOc'],
    name: 'Poke Ball Sock',
    price: 799,
    description: `frorm Pokemon`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/51KOwILMDXL._UX679_.jpg'],
    name: 'Wu-Tang',
    price: 799,
    description: `Ya best protect ya sock, and keep ya feet warm cuz flu tang clan aint nothin to sock wit`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://78.media.tumblr.com/tumblr_mcip40VMyC1roaxc3o1_250.jpg'],
    name: 'Red Hot Chili Peppers Sock',
    price: 799,
    description: `L.A. Lakers fast break makers
      Kinds of the court shake and bake all takers
      Back to back is a bad ass fact a claim that remains in tact
      M-a-g-i-see see you on the court
      Buck has come to play his way and his way is to thwart
      M-a-g-i-see magic of the buck
      Other teams pray for dreams
      But he don't give a [sock]
      Penetrating the lane like a bullet train
      Comes the magic blood a telepathic brain
      Knucklehead sockers better duck
      When the buck comes through like a truck
      Scott stops pops and drops it in
      On his way back gets a little skin
      From the hand of a man named a. c. green
      Slam so hard break your t.v. screen
      Worthy's hot with his tomasawk
      Take it to the hole make your mamma talk
      I hate to burst your bubble but triple double trouble
      Is coming…`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://cdn2.bigcommerce.com/n-nr1m3w/b72t4x/products/100723/images/113640/Ren_and_Stimpy_Characters_5_Pack_Low_Cut_Socks__22570.1524199228.380.500.jpg?c=2'],
    name: 'Ren and Stimpy 5-Pack',
    price: 799,
    description: `Five individual stimpys or reNs for your socky individually the sock there are five but there can only be one actually`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://i.pinimg.com/originals/76/f4/1c/76f41ca5d1b1cb1758ff2327114c0c66.jpg'],
    name: 'Trump Hair Sock',
    price: 759,
    description: `Sock that has Trump hair on the top and it flows in the breeze`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['funny']
  },
  {
    photos: ['https://cdn1.bigcommerce.com/server2500/0iaufi/products/4215/images/41767/SOC19__02196.1431537423.1280.1280.jpg?c=2'],
    name: 'Money Biz Sock',
    price: 759,
    description: `Monkey Biz Monkey Biz Monkey Biz Monkey Biz Monkey Biz Monkey Biz Monkey Biz`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['funny', 'dress']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/1631/8771/products/HM100587-BLUE_png_2000x.jpg?v=1494449011'],
    name: 'Cool Cat Sock',
    price: 799,
    description: `coooooooloolllllllooooooooooolll ooooooll catt `,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['funny', 'casual']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/61mpXR6ZQEL._UX385_.jpg'],
    name: 'Melting Socks',
    price: 899,
    description: `Socks with 'Melting Clocks' by Salvador Dali`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://www.artistshot.com/assets/images/admin/product_design/2058637/super-smash-bros-2-socks-420x420.jpg'],
    name: 'Super Smash Bros Sock',
    price: 899,
    description: `sweet indeed liked this game and i want to put this Sock on my feets but only one individually socky`,
    isAdult: true,
    sizes: ["Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/51%2BFfPGFqlL._UX679_.jpg'],
    name: 'Sockobo Final Fantasock',
    price: 899,
    description: `Sockobo Sockobo Sockobo Sockobo Sockobo Sockobo i mean chocobo i guess`,
    isAdult: true,
    sizes: ["Small", "Medium", "Large"],
    categories: ['popculture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/51qpwYI89eL._UX385_.jpg'],
    name: 'Air Bender Socks',
    price: 899,
    description: `NOt that like one movie but bender from Futurama doing that michael jordan thing`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['popculture', 'athletic']
  },
  {
    photos: ['http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/hwsAAMXQrhdTVhqt/$_3.JPG?set_id=2'],
    name: 'Adidas Soccer Sock',
    price: 759,
    description: `like Sockr`,
    isAdult: true,
    sizes: ["Small", "Large"],
    categories: ['athletic']
  },
  {
    photos: ['http://sc02.alicdn.com/kf/HTB12jGiJFXXXXcIaXXXq6xXFXXXr/Mens-Sports-Apparel-White-and-Blue-Stripes.jpg'],
    name: 'Football Sock',
    price: 759,
    description: `but American Football i guess if that matters idk`,
    isAdult: true,
    sizes: ["Small", "Medium"],
    categories: ['athletic']
  },


    //Kid
  {
    photos: ['http://static.shoplightspeed.com/shops/603601/files/003179864/rainbow-unicorn-kid-socks.jpg'],
    name: 'Unicorn Sock',
    price: 399,
    description: `Single children's Sock with unicorn print`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['casual'],
  },
  {
    photos: ['http://static.shoplightspeed.com/shops/603601/files/003179890/sprinkle-donuts-kid-socks.jpg'],
    name: 'Donut Sock',
    price: 399,
    description: `Single children's Sock with donut print`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['funny', 'casual']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/0234/4461/products/pizza_kids_socks_green_socksmith_2048x.jpg?v=1525897606'],
    name: 'Pizza Sock',
    price: 399,
    description: `Single children's Sock with pizza print`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['funny', 'casual']
  },
  {
    photos: ['https://bit.ly/2MztuBe'],
    name: 'Kid Snoopy',
    price: 499,
    description: `Single children's Sock with snoopy print`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['popculture', 'casual']
  },
  {
    photos: ['http://www.tinysoles.com/images/P/Country%20Kids%20Rainbow%20Stripe%20Sock%20Coral%20300.jpg'],
    name: 'Rainbow Stripe Sock',
    price: 399,
    description: `children's sock with rainbow stripes`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['casual'],
  },
  {
    photos: ['http://www.tinysoles.com/images/P/Country%20Kids%20Rainbow%20Stripe%20Sock%20Orchid%20300.jpg'],
    name: 'Orchid Sock',
    price: 399,
    description: `children's sock with orchid print`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['casual'],
  },
  {
    photos: ['https://images.vans.com/is/image/Vans/X4JKY6-HERO?$583x583$'],
    name: 'Buzz LightYear Sock',
    price: 399,
    description: `children's sock with Buzz LightYear from Disney's Toy Story`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['popculture', 'casual']
  },
  {
    photos: ['https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T64_4666B_ZZ_X_EC_0?$PLP_PRODUCT_IMAGE$'],
    name: '5-Single Striped Socks',
    price: 1299,
    description: `Five individual children's socks with stripes`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium", "Child Large"],
    categories: ['casual'],
  },
  {
    photos: ['https://s7d2.scene7.com/is/image/dkscdn/16UARY6PKRSSTRLCYAPA'],
    name: 'Low-Cut Athletic Sock',
    price: 399,
    description: `children's athletic sock`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['athletic']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/81s1yRozE-L._SX522_.jpg'],
    name: 'No-Show Running Sock',
    price: 399,
    description: `children's running sock`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['athletic']
  },
  {
    photos: ['https://image.dhgate.com/0x0/f2/albu/g1/M01/E9/3D/rBVaGForwSOAEwKsAAFPt7f4bIo193.jpg'],
    name: '3-Pack Athletic Socks',
    price: 1099,
    description: `Three individual children's athletic socks`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium", "Child Large"],
    categories: ['athletic']
  },
  {
    photos: ['https://image.dhgate.com/0x0/f2/albu/g1/M01/E9/3D/rBVaGForwSOAEwKsAAFPt7f4bIo193.jpg'],
    name: '3-Pack Low-Cut Athletic Socks',
    price: 1099,
    description: `Three individual low-cut children's athletic socks`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['athletic']
  },
  {
    photos: ['http://cdn3.volusion.com/kzkqm.kxjqh/v/vspfiles/photos/B598-2.jpg?1329346265'],
    name: 'Mini Crochet Lace Sock',
    price: 499,
    description: `Single children's sock`,
    isAdult: false,
    sizes: ["Child Small"],
    categories: ['dress']
  },
  {
    photos: ['http://cdn3.volusion.com/kzkqm.kxjqh/v/vspfiles/photos/5120A-2.jpg?1329346265'],
    name: '3-Pack Brown Dress Socks',
    price: 1299,
    description: `Three individual brown children's dress socks`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['dress']
  },
  {
    photos: ['https://cdn1.boldsocks.com/wp-content/uploads/product-photography/24169SITM-JUNIOR-Gray-Robot-Kids-Dress-Socks-Sock-it-to-Me/images/24169SITM-JUNIOR-Gray-Robot-Kids-Dress-Socks-Sock-it-to-Me27.jpg'],
    name: 'Grey Robot Dress Sock',
    price: 599,
    description: `Single children's sock`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['dress', 'funny']
  },
  {
    photos: ['https://cdn1.boldsocks.com/wp-content/uploads/product-photography/24188SITM-JUNIOR-Green-Football-Field-Kids-Dress-Socks-Sock-it-to-Me/images/24188SITM-JUNIOR-Green-Football-Field-Kids-Dress-Socks-Sock-it-to-Me09.jpg'],
    name: 'Football Field Dress Sock',
    price: 599,
    description: `Single children's dress sock with football field print`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['dress']
  },
  {
    photos: ['https://www.jcrew.com/s7-img-facade/G7270_BK0001?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=200&hei=200'],
    name: '3-Pack Black Dress Socks',
    price: 1299,
    description: `Three individual black children's dress socks`,
    isAdult: false,
    sizes: ["Child Large"],
    categories: ['dress']
  },
  {
    photos: ['https://cdn1.boldsocks.com/wp-content/uploads/product-photography/24213SS-7-10Y-Black-Einstein-Genius-Kids-Dress-Socks-Socksmith/images/24213SS-7-10Y-Black-Einstein-Genius-Kids-Dress-Socks-Socksmith09.jpg'],
    name: 'Einstein Dress Sock',
    price: 599,
    description: `Single children's sock with print of Albert Einstein`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['dress', 'funny']
  },
  {
    photos: ['https://sc02.alicdn.com/kf/HTB1K_MNJVXXXXb.XXXXq6xXFXXXg.jpg'],
    name: '3-Pack Lace Socks',
    price: 1499,
    description: `Three individual children's lace dress socks`,
    isAdult: false,
    sizes: ["Child Small"],
    categories: ['dress']
  },
  {
    photos: ['http://cdn3.volusion.com/kzkqm.kxjqh/v/vspfiles/photos/5251-1.jpg?1359952834'],
    name: 'White Lace Sock',
    price: 699,
    description: `Single children's white dress sock with Lace`,
    isAdult: false,
    sizes: ["Child Small"],
    categories: ['dress']
  },
  {
    photos: ['https://i.pinimg.com/originals/3a/bc/b4/3abcb483af53cf0bbd961fd27d9df8ee.jpg'],
    name: 'White Dress Sock',
    price: 699,
    description: `Single children's white dress sock `,
    isAdult: false,
    sizes: ["Child Small"],
    categories: ['dress']
  },
  {
    photos: ['https://i.pinimg.com/236x/76/3b/76/763b7622c8cac7decf97703a5187da6e--kids-socks-cotton-socks.jpg'],
    name: '3-Pack X-mas Socks',
    price: 1299,
    description: `Three individual children's dress socks with Christmas prints`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['dress', 'pop culture']
  },
  {
    photos: ['https://images-na.ssl-images-amazon.com/images/I/81EX1tbJnKL._SY879_.jpg'],
    name: '3-Pack Marvel Assorted Dress Socks',
    price: 1299,
    description: `Three individual children's dress socks with Marvel prints`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['dress', 'pop culture']
  },
  {
    photos: ['http://www.fightingsawks.com/uploads/2/9/2/5/29258291/s865610946843620892_p189_i1_w411.jpeg'],
    name: 'No Broccoli Sock',
    price: 599,
    description: `Single children's sock with an anti-broccoli agenda`,
    isAdult: false,
    sizes: ["Child Medium, Child Large"],
    categories: ['funny', 'dress']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/0234/4461/products/pug_socks_for_kids_socksmith_blue_cute_2048x.jpg?v=1525898298'],
    name: 'Pug Party Sock',
    price: 599,
    description: `Come to the pug party`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large", "Pug Medium"],
    categories: ['funny', 'casual']
  },
  {
    photos: ['https://cdn.shopify.com/s/files/1/0819/4135/products/Funny-Kids-Socks-Brad-Feet_480x_2x_d91d0b0f-c91e-415a-8b57-1ac7ebfed553.jpg?v=1504476016'],
    name: 'Sock Person Sock',
    price: 599,
    description: `Single children's sock is really a person that's really a sock`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['funny']
  },
  {
    photos: ['https://i.ebayimg.com/images/g/bQUAAOSwIWZZfxN2/s-l300.jpg'],
    name: 'Green Face Sock',
    price: 599,
    description: `Single children's sock, with single funny green face`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['funny']
  },
  {
    photos: ['https://i.ebayimg.com/images/g/L-MAAOSwZs1Zfxqa/s-l300.jpg'],
    name: 'Orange Face Sock',
    price: 599,
    description: `Single children's sock, with single funny orange face`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['funny']
  },
  {
    photos: ['https://underarmour.scene7.com/is/image/Underarmour/1240845-100_S?scl=1&fmt=jpg&qlt=70&wid=1064&hei=1240&size=958,1116&cache=on,off&bgc=f0f0f0&resMode=sharp2'],
    name: 'White Athletic Sock',
    price: 599,
    description: `Single children's white athletic ankle sock`,
    isAdult: false,
    sizes: ["Child Medium", "Child Large"],
    categories: ['athletic']
  },
  {
    photos: ['https://gsxtr.com/i/pr/accessori-vans-vans-x-marvel-sock-heather-grey-146916-674-1.jpg'],
    name: 'Spidey Sock',
    price: 599,
    description: `Single children's sock with Spiderman chillin on it`,
    isAdult: false,
    sizes: ["Child Medium"],
    categories: ['popculture']
  },
  {
    photos: ['https://i.pinimg.com/236x/38/a7/be/38a7bee267cf47729e81749e0eb1dfc3--cute-cartoon-characters-batman-clothing.jpg'],
    name: 'Cartoon Superhero Sock',
    price: 499,
    description: `Single children's sock with cartoon superhero kickin it on the little sock and stuff`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium"],
    categories: ['casual', 'popculture']
  },
  {
    photos: ['http://lp2.hm.com/hmgoepprod?set=source[/b2/d1/b2d1d942c3187072e1dd6bf94c82f78e310c127c.jpg],origin[dam],category[kids_boy8y_socks],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]'],
    name: '5-Pack Looney Tunes Socks',
    price: 14.99,
    description: `Five individual children's socks with five individual tunes`,
    isAdult: false,
    sizes: ["Child Small", "Child Medium", "Child Large"],
    categories: ['pop culture']
  }]

  await Sock.bulkCreate(data)

  console.log(bgMagenta('Seeding success!'))
  db.close()
}

seed(20)
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })

