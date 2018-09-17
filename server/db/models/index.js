const {User} = require('./user')
const {Sock} = require('./sock')
const {Order} = require('./order')
const {cartItem} = require('./cart-item') // OB: inconsinsent naming (should probably be CartItem)

User.hasMany(Order);
Order.belongsTo(User); // OB: creates `userId`

Sock.belongsToMany(Order, {through: cartItem});
Order.belongsToMany(Sock, {through: cartItem});

module.exports = {
  User,
  Sock,
  Order
}
