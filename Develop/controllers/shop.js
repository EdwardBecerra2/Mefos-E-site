const Product = require('../models/product');
const Cart = require('../models/cart');
const cart = require('../models/cart');

exports.addToCart = (req, res, next) => {
    const addedProduct = Product.findById(req.body.productId);
    Cart.save(addedProduct);
    console.log(Cart.getCart);
    res.end('saved!');
}