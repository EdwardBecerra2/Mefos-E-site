const { Laptop, Category } = require('../models');

const laptopData = [
    {
        name: 'TacBook Pro',
        price: 1400,
        stock: 10,
        image: 'https://mezha.media/wp-content/uploads/2022/11/apple-m2-max-geekbench-score-400x290.jpg',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'TacBook Wind',
        price: 1200,
        stock: 5,
        image: 'https://mezha.media/wp-content/uploads/2022/10/m2-macbook-pro-and-mac-mini-postponed-400x290.jpg',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'TacBook Mini',
        price: 1000,
        stock: 15,
        image: 'https://mezha.media/wp-content/uploads/2022/10/AORUS-15-XE4-2-of-23-400x290.jpg',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        name: 'TacBook Ultra',
        price: 1800,
        stock: 20,
        image: 'https://mezha.media/wp-content/uploads/2022/10/Acer-Swift-Edge-400x290.jpg',
        created_at: new Date(),
        updated_at: new Date()
    },
];
const seedLaptops = async () => {
    const categories = await Category.findAll({
        where: {
            category_name: 'Laptops'
        }
    });

    const laptopsCategoryId = categories[0].id;

    const laptopDataWithCategory = laptopData.map(laptop => ({
        ...laptop,
        category_id: laptopsCategoryId
    }));

    await Laptop.bulkCreate(laptopDataWithCategory);
};

module.exports = seedLaptops;