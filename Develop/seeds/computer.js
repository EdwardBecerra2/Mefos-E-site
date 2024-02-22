const { Product } = require('../models');

const computerData = [
    {
        product_name: 'UTac Pro',
        price: $1400,
        stock: 10,
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8OTzJYQ_5KbC754BeOnC9CeFWc1D3mWf1g&s',
        category_id: 1,
    },
    {
        product_name: 'UTac',
        price: $1200,
        stock: 15,
        image_url: 'https://freepngimg.com/thumb/computer_pc/8-computer-desktop-pc-png-image-thumb.png',
        category_id: 1,
    },
    {
        product_name: 'Tac Mini',
        price: $1000,
        stock: 20,
        image_url: 'https://freepngimg.com/thumb/computer_pc/14-2-computer-pc-high-quality-png-thumb.png',
        category_id: 1,
    },
    {
        product_name: 'Tac Ultra',
        price: $1800,
        stock: 5,
        image_url: 'https://freepngimg.com/thumb/computer_pc/1-2-computer-pc-png-thumb.png',
        category_id: 1,
    },
];

const seedComputers = () => Product.bulkCreate(computerData);

module.exports = seedComputers;
