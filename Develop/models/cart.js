// const { Product, Datatypes } = require('sequelize');
// const { sequelize } = require('../config/db');
// import { DataTypes } from 'sequelize';

// class cart extends Model{ }

// cart.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true

//         },
//         product_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             references: {
//                 model: Product,
//                 key: 'id'
//             },
//         },
//         quantity: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             defaultValue: 1
//         },
// })
const cart = [];
module.exports = class cart {
    static save(product, quantity) {
        If(cart) {
            const existingProductIndex = cart.products.findIndex(p => p.id === product.id);
            if (existingProductIndex >= 0) {
                const existingProduct = cart.products[existingProductIndex];
                existingProduct.qty += quantity;
                cart.totalPrice += product.price;
            
        } else {
            cart = { products: [], totalPrice: 0 };
            product.qty = 1
            cart.products.push({ product, quantity });
            cart.totalPrice += product.price;
        }
        };
        return cart;
    }
}