const {User} = require('./user')
const {Sock} = require('./sock')
const {Cart} = require('./cart')
const {CartItem} = require('./cart-item')
const {Order} = require('./order')

User.hasMany(Cart)
Cart.belongsTo(User)

Sock.belongsToMany(Cart, {through: CartItem})
Cart.belongsToMany(Sock, {through: CartItem})

User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
  User,
  Sock,
  Cart,
  CartItem,
  Order
}
