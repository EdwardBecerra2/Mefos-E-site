// js to run in front
const desktop = document.querySelector('#comp');
const laptop = document.querySelector('#laptp');
const smartPhone = document.querySelector('#smphone');
const watch = document.querySelector('#watch');

async function addItemToCart(productId) {
    try {
      const response = await fetch('/add_cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: productId, quantity: 1 }) 
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Product added to cart:', data);
      } else {
        console.error('Error adding product to cart:', data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

desktop.addEventListener('click', async function (event) {
    event.preventDefault();
    const productId = desktop.getAttribute('data-product');
    addItemToCart(productId); 
});

laptop.addEventListener('click', function (event) {
    event.preventDefault();
    const productId = laptop.getAttribute('data-product')
    addItemToCart(productId); 
});
    
smartPhone.addEventListener('click', async function (event) {
    event.preventDefault();
    const productId = smartPhone.getAttribute('data-product')
    addItemToCart(productId);

})
watch.addEventListener('click', async function (event) {
    event.preventDefault();
    const productId = watch.getAttribute('data-product')
    addItemToCart(productId);

})
