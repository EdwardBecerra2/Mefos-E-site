const router = require('express').Router();
const { category, product, productTag } = require('../../models');


router.get('/', async (req, res) => {
    // find all categories and include its associated Products
    try {
        const categoryData = await category.findAll();
        include: [{
            model: product
            , through: productTag, as: 'product_tags'
        }];
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value and include its associated Products
    try {
        const categoryData = await category.findByPk(req.params.id, {
            include: [{
                model: product
            }]
        });
        if (!categoryData) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
