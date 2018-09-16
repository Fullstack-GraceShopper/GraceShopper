const router = require('express').Router();
const {Order} = require('../db/models');
const {Sock} = require('../db/models');

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
        const order = await Order.create({ userId : req.params.userId});
        res.json(order);
    } catch (err) {
        next(err);
    }
});

// ==> get latest unsold order <== //
router.get('/:userId/cart', async (req, res, next) => {
    try {
        const order = await Order.findAll({
            limit: 1,
            where: {
                userId: req.params.userId,
            },
            order:[['createdAt', 'DESC']]
        });
        res.json(order);
    } catch (err) {
        next (err);
    }
});

router.get('/inCart/:cartNumber', async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.cartNumber, {
            include: [{
                model: Sock,
            }]
        });
        res.json(order);
    } catch (err) {
        next (err);
    }
})

module.exports = router
