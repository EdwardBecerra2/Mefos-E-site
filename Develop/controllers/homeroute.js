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

    res.render('index', { // response to the index.handlebars file
        loggedIn: req.session.loggedIn,
        products  //the products object being passed to the index.handlebars file
    });
});

module.exports = router;