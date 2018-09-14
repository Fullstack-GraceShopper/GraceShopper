const {User} = require('./user')
const {Sock} = require('./sock')
const {Order} = require('./order')

User.hasMany(Order);
Order.belongsTo(User);

Sock.belongsToMany(Order, {through: 'itemInCart'});
Order.belongsToMany(Sock, {through: 'itemInCart'});

module.exports = {
  User,
  Sock,
  Order,
}
