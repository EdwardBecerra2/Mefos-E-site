const { Product } = require('../models');

const laptopData = [
    {
        product_name: 'TacBook Pro',
        price: $1400,
        stock: 10,
        image_url: 'https://mezha.media/wp-content/uploads/2022/11/apple-m2-max-geekbench-score-400x290.jpg',
        category_id: 2,
    },
    {
        product_name: 'TacBook Wind',
        price: $1200,
        stock: 5,
        image_url: 'https://mezha.media/wp-content/uploads/2022/10/m2-macbook-pro-and-mac-mini-postponed-400x290.jpg',
        category_id: 2,
    },
    {
        product_name: 'TacBook Mini',
        price: $1000,
        stock: 15,
        image_url: 'https://mezha.media/wp-content/uploads/2022/10/AORUS-15-XE4-2-of-23-400x290.jpg',
        category_id: 2,
    },
    {
        product_name: 'TacBook Ultra',
        price: $1800,
        stock: 20,
        image_url: 'https://mezha.media/wp-content/uploads/2022/10/Acer-Swift-Edge-400x290.jpg',
        category_id: 2,
    },
];
const seedLaptops = () => Product.bulkCreate(laptopData);
module.exports = seedLaptops;