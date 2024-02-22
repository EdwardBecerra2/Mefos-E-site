const { ProductTag } = require('../models');

const productTagData = [
    { productId: 1, tagId: 1 },
    { productId: 2, tagId: 2 },
    { productId: 3, tagId: 3 },
    { productId: 4, tagId: 4 },
    { productId: 5, tagId: 5 },
    { productId: 6, tagId: 6 },
    { productId: 7, tagId: 7 },
    { productId: 8, tagId: 8 },
    { productId: 9, tagId: 8 },
    { productId: 10, tagId: 10 },
    { productId: 11, tagId: 11},
    { productId: 12, tagId: 12 },
    { productId: 13, tagId: 13 },
    { productId: 14, tagId: 14 },
    { productId: 15, tagId: 15 },
    { productId: 16, tagId: 16},
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
