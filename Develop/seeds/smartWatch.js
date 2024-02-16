const { SmartWatch } = require('../models');

const smartWatchData = [
    {
        brand: 'Tapple',
        name: 'Tapple Watch',
        model: 'Watch',
        price: 100,
        stock: 5,
        image: 'https://img.freepik.com/free-psd/digital-smart-watch-icon-isolated-3d-render-illustration_439185-11924.jpg?size=626&ext=jpg',
        color: 'black, green, red, white, blue',
        created_at: new Date(),
        updated_at: new Date()

    },
    {
        brand: 'Tapple',
        name: 'Tapple Watch Pro',
        price: 250,
        stock: 10,
        image: 'https://img.freepik.com/free-vector/smart-hand-watch-transparent-set-electronic-gadgets-with-circle-screen-mechanical-hands-isolated-realistic-vector-illustration_1284-74973.jpg?size=626&ext=jpg',
        color: 'black, green, red, white, blue',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        brand: 'Tapple',
        name: 'Tapple Watch Gen 2',
        price: 350,
        stock: 15,
        image: 'https://img.freepik.com/free-vector/flat-design-fitness-trackers_23-2148533615.jpg?size=626&ext=jpg&ga=GA1.2.99618520.1707851583&semt=ais',
        color: 'black, green, red, white, blue',
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        brand: 'Tapple',
        name: 'Tapple Watch Gen 3',
        price: 500,
        stock: 3,
        image: 'https://img.freepik.com/free-vector/realistic-style-fitness-trackers_23-2148509776.jpg?size=626&ext=jpg&ga=GA1.2.99618520.1707851583&semt=ais',
        color: 'black, green, red, white, blue',
        created_at: new Date(),
        updated_at: new Date()
    },
];
const seedSmartWatch = () => SmartWatch.bulkCreate(smartWatchData);
module.exports = seedSmartWatch;