// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./tag');
const ProductTag = require('./ProductTag');
const Computer = require('./computer');
const Laptop = require('./laptop');
// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(ProductTag, {
//     through: ProductTag,
//     foreignKey: 'product_id'
// });
Product.hasMany(ProductTag, {
    foreignKey: 'product_id',
});


// Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//     // through: ProductTag,
//     foreignKey: 'tag_id'
// });
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
    Computer,
    Laptop,
};

