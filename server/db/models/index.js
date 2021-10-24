const {User} = require('./user')
const {Address} = require('./address')
const {Sock} = require('./sock')
const {Order} = require('./order')
const {CartItem} = require('./cart-item')

User.hasOne(Address)
Address.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Sock.belongsToMany(Order, {through: CartItem})
Order.belongsToMany(Sock, {through: CartItem})

module.exports = {
  User,
  Address,
  Sock,
  Order,
  CartItem
}
