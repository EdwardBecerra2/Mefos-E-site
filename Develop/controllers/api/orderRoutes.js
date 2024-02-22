const router = require('express').Router();
const {Order, Category, Product, ProductTag } = require("../../models");

router.post('/', async (req, res) => {
    try{
        const order = await order.findall({
            include: [{
                model: Category,
                model: Product,
                model: ProductTag,
            }]
        });
        res.json(order)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;