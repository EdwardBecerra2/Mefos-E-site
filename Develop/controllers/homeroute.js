const express = require('express');
const router = express.Router();
const { Product, Category, ProductTag } = require('../models');

router.get('/', async (req, res) => { // this is the home route
    const products = await Product.findAll({
        include: [{
            model: Category,
            model: ProductTag,
        }],
        raw: true
    });

    res.render('index', {
        loggedIn: req.session.loggedIn,
        products
    });
});

module.exports = router;