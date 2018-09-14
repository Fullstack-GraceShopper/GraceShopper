const router = require('express').Router();
const {Order} = require('../db/models');
const {User} = require('../db/models');

// ==> get all users orders <== //
router.get('/:userId', async (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});

// ==> create new users cart <== //
router.post('/:userId', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId);
        const order = await Order.create({ userId : user.id});
        res.json(order);
    } catch (err) {
        next(err);
    }
});

// ==> get latest unsold order <== //
router.get('/:userId/cart', async (req, res, next) => {
    try {

    } catch (err) {
        next (err);
    }
});

module.exports = router
