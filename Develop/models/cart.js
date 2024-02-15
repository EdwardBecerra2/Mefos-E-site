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
const cart = null;
module.exports = class cart {
    static save(product, quantity) {
        if (cart) { // isn't null
            const existingProductsIndex = cart.products.findIndex(p => p.id == product.id); //checks if product is in cart
            console.log(existingProductsIndex);
            if (existingProductsIndex >= 0) {
                const existingProduct = cart.products[existingProductsIndex];
                existingProduct.qty += quantity;
                cart.totalPrice += product.price;
            } else {
                product.qty = quantity;
                cart.products.push({ product, quantity });
                cart.totalPrice += product.price;
            }
        } else {
            cart = { products: [], totalPrice: 0 };
            product.qty = 1
            cart.products.push(product);
            cart.totalPrice = product.price;
        }
    }

    static getCart() {
        return cart;
    }
}