const { Category } = require('../models');
const categoryData = [
    {
        image: "Develop/public/images/compclip.jpeg",
        category_name: 'DeskTop Computers',
    },
    {
        image: "Develop/public/images/laptopclip.jpeg",
        category_name: 'Laptops',
    },
    {
        image: "Develop/public/images/smartphclip.jpeg",
        category_name: 'Smart Phones',
    },
    {
        image: "Develop/public/images/smwatchclip.jpeg",
        category_name: 'Smart Watches',
    }
];
const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories;
