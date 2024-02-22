
// const cart = [];
// module.exports = class cart {
//     static addProduct(id, product) {
//         const existingProductIndex = cart.products.findIndex(p => p.id === id);
//         const existingProduct = cart.products[existingProductIndex];
//         let updatedProduct;
//         if (existingProduct) {
//             updatedProduct = { ...existingProduct };
//             updatedProduct.qty = updatedProduct.qty + 1;
//             cart.products = [...cart.products];
//             cart.products[existingProductIndex] = updatedProduct;
//         } else {
//             updatedProduct = { id: id, qty: 1 };
//             cart.products = [...cart.products, updatedProduct];
//         }
//         cart.totalPrice = cart.totalPrice + +product.price;
//     };

//     static deleteProduct(id, product) {
//         const existingProductIndex = cart.products.findIndex(p => p.id === id);
//         const existingProduct = cart.products[existingProductIndex];
//         let updatedProduct;
//         if (existingProduct.qty === 1) {
//             updatedProduct = { ...existingProduct };
//             updatedProduct.qty = updatedProduct.qty - 1;
//         }
//     };
// }


