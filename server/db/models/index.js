const {User} = require('./user')
const {Sock} = require('./sock')
const {Order} = require('./order')
const {sockOrder} = require('./sock-order')

User.hasMany(Order);
Order.belongsTo(User);

Sock.belongsToMany(Order, {through: sockOrder});
Order.belongsToMany(Sock, {through: sockOrder});

module.exports = {
  User,
  Sock,
  Order,
  sockOrder
}
