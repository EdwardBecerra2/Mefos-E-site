// const apiKey = "pk_live_51Oggj7Gh3q0yh3BLArzNjk7JPD89FOl4dGga0EsLt2z2lrABQSDcENORhAFGVYFE7oqZQDDbUMcZztNwlfMfsiJD00aTnMqwyA";
// const stripe = Stripe(apiKey);
// const elements = stripe.elements();
const router = require('express').Router();
const userRoutes = require('./userRoute');
const productRoutes = require('./productRoutes');
const cartRoutes = require('./cartRoute');
const checkoutRoutes = require('./checkoutRoute');
const orderRoutes = require('./orderRoutes');
const categoryRoutes = require('./categoryRoute');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);
router.use('/checkout', checkoutRoutes);
router.use('/orders', orderRoutes);
router.use('/categories', categoryRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;
