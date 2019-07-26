const {User} = require('./user')
const {Sock} = require('./sock')
const {Cart} = require('./cart')
const {CartItem} = require('./cart-item')

// User.hasMany(Order)
// Order.belongsTo(User)

// Sock.belongsToMany(Order, {through: CartItem})
// Order.belongsToMany(Sock, {through: CartItem})

User.hasMany(Cart)
Cart.belongsTo(User)

Sock.belongsToMany(Cart, {through: CartItem})
Cart.belongsToMany(Sock, {through: CartItem})

module.exports = {
  User,
  Sock,
  Cart,
  CartItem
}
