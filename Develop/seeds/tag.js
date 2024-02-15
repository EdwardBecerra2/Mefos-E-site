const { Tag } = require('../models');

const tagData = [
    { name: 'Technology' },
    { name: 'Lifestyle' },

];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;