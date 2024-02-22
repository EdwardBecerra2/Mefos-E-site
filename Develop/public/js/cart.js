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
    const data = await response.json();
})
 // converts to JSON data

    laptop.addEventListener ('click', async function (event) {
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
    function addToCart(event) { // function triggered from button to add items to the cart
        console.log(event.target);
        const item = { // object to store the item
            id: parseInt(event.target.dataset.prodid),  // parseInt converts to integer   
            product_name: event.target.dataset.prodname,
            price: parseInt(event.target.dataset.price),  // converts to integer
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

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
        loadshoppingbag();
    }
    function loadshoppingbag() {  // function to load the shopping bag
        let cart = JSON.parse(localStorage.getItem('cart')) || []; // get the cart from local storage
        console.log(cart);
        const shoppingbag = document.querySelector('#shoppingbag'); // get the shopping bag element
        shoppingbag.innerHTML = ''; // clear the shopping bag
        cart.forEach(item => { // loop through the cart and add each item to the shopping bag
            const tr = document.createElement('tr'); //creating a table row
            // template literal to add the item to the table row
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
        cart = cart.filter(item => item.id !== id); // filter out the removed id item
        localStorage.setItem('cart', JSON.stringify(cart));
        loadshoppingbag();
    }
    loadshoppingbag(); // load the shopping bag when the page loads
