const express = require('express');
const Cart = require('../../models/cart');
const router = express.Router();
const Product = require('../../models/product');

router.post('/add_cart', async (req, res) => {
    try {
        // Get product_id and quantity 
        const { product_id, quantity = 1 } = req.body;

        // Get the user's ID from the session
        const user_id = req.session.user_id;

        // Check if user_id exists in the session
        if (!user_id) {
            return res.status(401).json({ message: 'Please log in to add items to the cart' });
        }

        // Add the item to the cart with the user_id
        const cartItems = Cart.addItem(user_id, product_id, quantity);

        res.status(200).json({ message: 'Product added to the cart', cartItems });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;

// router.post('/', async (req, res) => {
//     try {
//         const cartItems = await cart();
//         req.session.cart = {
//             product_id: cartItems.product_id,
//             quantity: cartItems.quantity,
//             user_id: cartItems.user_id,
//         }
//         } catch (err) {
//             res.status(500).json({ message: err.message });
//         }
//     });

// exports.addToCart = async (req, res) => {
//     try {
//         const cartItems = await cart();
//         req.session.cart = {
//             product_id: cartItems.product_id,
//             quantity: cartItems.quantity,
//             user_id: cartItems.user_id,
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// }
    

