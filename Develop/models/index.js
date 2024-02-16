// import models
const Product = require('./product');
const Category = require('./Category');
const Tag = require('./tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
});

Product.hasMany(ProductTag, {
    foreignKey: 'product_id',
});

Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
});

ProductTag.belongsTo(Product, {
    foreignKey: 'product_id',
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};

