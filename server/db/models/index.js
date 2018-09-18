const {User} = require('./user')
const {Sock} = require('./sock')
const {Order} = require('./order')
const {CartItem} = require('./cart-item')

User.hasMany(Order);
Order.belongsTo(User);

Sock.belongsToMany(Order, {through: CartItem});
Order.belongsToMany(Sock, {through: CartItem});

module.exports = {
  User,
  Sock,
  Order,
  CartItem
}
