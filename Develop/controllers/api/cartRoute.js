const express = require('express');
const path = require('path');
const router = express.Router();
const Product = require('../models/product');

const { cart } = require('../models');
const { nextTick } = require('process');

router.post('/', async (req, res) => {
    try {
        const cartItems = await cart();
        req.session.cart = {
            product_id: cartItems.product_id,
            quantity: cartItems.quantity,
            user_id: cartItems.user_id,
        }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

exports.addToCart = async (req, res) => {
    try {
        const cartItems = await cart();
        req.session.cart = {
            product_id: cartItems.product_id,
            quantity: cartItems.quantity,
            user_id: cartItems.user_id,
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
    }

