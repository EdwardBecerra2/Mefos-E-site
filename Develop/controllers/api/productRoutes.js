const router = require('express').Router();
const { Product, Category, ProductTag } = require('../../models');

// The `/api/products` endpoint
// get all products
router.get('/', async (req, res) => {
    try{
        const product = await Product.findAll({
         include: [{
            model: Category,
            model: ProductTag,
         }]
           
    });
    res.json(product)
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;