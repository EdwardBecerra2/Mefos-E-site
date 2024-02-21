<!-- # Hook up image url by modifying model, re-syncing your tables (source & seed) -->
<!-- # Modify the image prop in all seeds to be image_url -->
<!-- # Bring images back on product list -->
<!-- # Add a class to the add to cart button -->
<!-- # use a single click event listener in your front-end javascript to listen for click
# use some unique attribute to identify which product was clicked (e,g. add data-product="{{id}}" attribute to the button in index.hanldebars to assign an id to each product add to cart button) -->
# in click listener, take product ID, send fetch request to back-end to add to cart, which either adds something to database or updates session storage (easier)