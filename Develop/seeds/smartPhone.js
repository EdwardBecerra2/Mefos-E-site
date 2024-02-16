const { Product } = require('../models');

const smartPhone = [
    {
        product_name: 'Samsing Milky S10',
        price: 1000,
        stock: 10,
        image: 'https://mezha.media/wp-content/uploads/2024/02/Google-Pixel-9-Pro.jpg',
        color: 'black, green, red, white, blue',
        category_id: 3,
    },
    {
        product_name: 'UPhone X',
        price: 2000,
        stock: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Mp5thBlE2cr90Fh4P_Dup6JN5taRNA3Nng&s',
        color: 'black, green, red, white, blue',
        category_id: 3,
    },
    {
        product_name: 'TwoPlus 6',
        price: 1500,
        stock: 8,
        image: 'https://mezha.media/wp-content/uploads/2024/02/ASUS-Zenfone-11-Ultra-2-400x290.jpg',
        color: 'black, silver, bronze, blue',
        category_id: 3,
    },
    {
        product_name: 'Samsing Milky S9',
        price: 900,
        stock: 15,
        image: 'https://mezha.media/wp-content/uploads/2024/01/Google-Pixel-8-Pixel-8-Pro-Mint.jpg',
        color: 'black, green, red, white, blue',
        category_id: 3,
    },
];

const seedSmartPhones = () => Product.bulkCreate(smartPhone);
module.exports = seedSmartPhones;

