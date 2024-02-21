// js to run in front
const desktop = document.querySelector('#comp');
const laptop = document.querySelector('#laptp');
const smartPhone = document.querySelector('#smphone');
const watch = document.querySelector('#watch');

// event listeners for each button
desktop.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productRoutes', { // fetches the data from the api
    })
    const data = await response.json(); // converts to JSON data

})
laptop.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productRoutes', {
    })
    const data = await response.json(); 

})
smartPhone.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productRoutes', {
    })
    const data = await response.json(); 

})
watch.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productRoutes', {
    })
    const data = await response.json(); 

})
function addToCart(event) { 
    console.log(event.target);
    const item = {
        id: parseInt(event.target.dataset.prodid),  // converts to integer   
        product_name: event.target.dataset.prodname,
        price: parseInt(event.target.dataset.price), // converts to integer
        qty: 1,

    }
    console.log(item);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // check to see if item is already in cart
    if (cart.find(prod => prod.id == item.id)) {
        item.qty += 1;
    } else {
        cart.push(item);
    }

    // cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    loadshoppingbag();
}
function loadshoppingbag() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);
    const shoppingbag = document.querySelector('#shoppingbag');
    shoppingbag.innerHTML = ''; // clear the shopping bag
    cart.forEach(item => {
        const tr = document.createElement('tr'); //creating a table row
        tr.innerHTML = `
            <td>${item.product_name}</td>
            <td>${item.qty}</td>
            <td>${item.price}</td>
            <td>${item.price * item.qty}</td>

            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        shoppingbag.append(tr);
    });
}
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id); // filter out the item with the id
    localStorage.setItem('cart', JSON.stringify(cart));
    loadshoppingbag();
}
loadshoppingbag();
