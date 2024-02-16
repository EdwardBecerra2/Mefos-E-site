const { Computer, Category } = require('../models');

const computerData = [
    {
    name: 'UTac Pro',
    price: 1400,
    stock: 10,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8OTzJYQ_5KbC754BeOnC9CeFWc1D3mWf1g&s',
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    name: 'UTac',
    price: 1200,
    stock: 15,
    image: 'https://freepngimg.com/thumb/computer_pc/8-computer-desktop-pc-png-image-thumb.png',
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    name: 'Tac Mini',
    price: 1000,
    stock: 20,
    image: 'https://freepngimg.com/thumb/computer_pc/14-2-computer-pc-high-quality-png-thumb.png',
    created_at: new Date(),
    updated_at: new Date()
    },
    {
    name: 'Tac Ultra',
    price: 1800,
    stock: 5,
    image: 'https://freepngimg.com/thumb/computer_pc/1-2-computer-pc-png-thumb.png',
    created_at: new Date(),
    updated_at: new Date()
    },
];

const seedComputers = async () => {
    const categories = await Category.findAll({
      where: {
        category_name: ['DeskTop Computers', 'Laptops', 'Smart Phones', 'Smart Watches']
      }
    });
  
    const categoryMap = categories.reduce((map, category) => {
      map[category.category_name] = category.id;
      return map;
    }, {});
  
    const seededComputers = computerData.map(computer => ({
      ...computer,
      category_id: categoryMap['DeskTop Computers']
    }));
  
    await Computer.bulkCreate(seededComputers);
  };

module.exports = seedComputers;
