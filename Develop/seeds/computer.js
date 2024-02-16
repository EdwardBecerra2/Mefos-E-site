const { Computer } = require('../models');

const computerData = [
    {
    name: 'UTac Pro',
    price: 1400,
    stock: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8OTzJYQ_5KbC754BeOnC9CeFWc1D3mWf1g&s',
        category_id: 5,
    },
    {
    name: 'UTac',
    price: 1200,
    stock: 15,
    image: 'https://freepngimg.com/thumb/computer_pc/8-computer-desktop-pc-png-image-thumb.png',
        category_id: 6,
    },
    {
    name: 'Tac Mini',
    price: 1000,
    stock: 20,
    image: 'https://freepngimg.com/thumb/computer_pc/14-2-computer-pc-high-quality-png-thumb.png',
        category_id: 7,
    },
    {
    name: 'Tac Ultra',
    price: 1800,
    stock: 5,
    image: 'https://freepngimg.com/thumb/computer_pc/1-2-computer-pc-png-thumb.png',
        category_id: 8,
    },
];

const seedComputers = () => Computer.bulkCreate(computerData);

module.exports = seedComputers;
