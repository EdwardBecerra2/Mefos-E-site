// js to run in front
const desktop = document.querySelector('#comp');
const laptop = document.querySelector('#laptp');
const smartPhone = document.querySelector('#smphone');
const watch = document.querySelector('#watch');

desktop.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productsRoute', {
    })
    const data = await response.json(); // converts to JSON data

})
laptop.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productsRoute', {
    })
    const data = await response.json(); // converts to JSON data

})
smartPhone.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productsRoute', {
    })
    const data = await response.json(); // converts to JSON data

})
watch.addEventListener('click', async function (event) {
    event.preventDefault();
    const response = await fetch('/api/productsRoute', {
    })
    const data = await response.json(); // converts to JSON data

})
