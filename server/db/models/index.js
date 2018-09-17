const {User} = require('./user')
const {Sock} = require('./sock')
const {Order} = require('./order')

User.hasMany(Order);
Order.belongsTo(User);

Sock.belongsToMany(Order, {through: 'itemsInCart'});
Order.belongsToMany(Sock, {through: 'itemsInCart'});

module.exports = {
  User,
  Sock,
  Order
}
