const { User } = require('./user')
const { Sock } = require('./sock')
const { Order } = require('./order')

User.hasMany(Order);
Order.belongsTo(User);
// OB/JL: from a naming perspective, 'cart' sounds like each row would be "all the items one user has in their cart right now", but actually represents "one item a user has in their cart right now"
Sock.belongsToMany(Order, {through: 'cart'});
Order.belongsToMany(Sock, {through: 'cart'});

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Sock,
  Order,
}
