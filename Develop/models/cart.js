class Cart {
    constructor() {
      this.items = []; 
    }
  
    // Adds an item to the cart
    addItem(productId, quantity) {
      const existingItem = this.items.find(item => item.productId === productId);
      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity += quantity;
      } else {
        // If the item is not in the cart, add it
        this.items.push({ productId, quantity });
      }
      return this.items;
    }
  
    // Removes an item from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.productId !== productId);
      return this.items;
    }
  
    // Gets the cart items
    getItems() {
      return this.items;
    }
  
    // Clears the cart
    clear() {
      this.items = [];
      return this.items;
    }
  }
  
  module.exports = new Cart();
  

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


