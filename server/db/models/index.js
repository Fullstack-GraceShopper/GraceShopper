const {User} = require('./user')
const {Sock} = require('./sock')
const {Order} = require('./order')
const {cartItem} = require('./cart-item')

User.hasMany(Order);
Order.belongsTo(User);

Sock.belongsToMany(Order, {through: cartItem});
Order.belongsToMany(Sock, {through: cartItem});

module.exports = {
  User,
  Sock,
  Order
}
