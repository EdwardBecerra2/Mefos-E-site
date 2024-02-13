const { Products } = require('../models/Products');

const productData = [
    {
        name: 'Computer',
    },
    {
        name: 'Laptop',
    },
    { 
        name: 'SmartPhone',
    },
    {
        name: 'SmartWatch',
    },
];

const seedProducts = () => Products.bulkCreate(productData);
module.exports = seedProducts;