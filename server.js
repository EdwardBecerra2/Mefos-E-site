const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./Develop/config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
const authRoutes = require('./Develop/controllers/api/authRoutes');
const homeRoute = require('./Develop/controllers/homeroute');
const { connect } = require('http2');

// Session middleware setup
app.use(session({
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
}));


// Set up handlebars engine with main as the default layout
app.engine('handlebars', engine({
  layoutsDir: path.join(__dirname, 'Develop/views/layouts'),
  defaultLayout: 'main'
}));
console.log('Layouts directory set to:', path.join(__dirname, 'Develop/views/layouts'));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'Develop/views/'));
console.log('Views directory set to:', path.join(__dirname, 'Develop/views/'));


// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'Develop/public')));

// Use the routes
app.use('/', authRoutes);
app.use('/', homeRoute);

app.get('/', (req, res) => {
  const query = `SELECT * FROM product`;
  connection.query(query, (err, results) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    
    res.render('product', { products: results, cart: req.session.cart })
  });
});

app.post('cartRoute', (req, res) => {
  const product_id = req.body.category_id;
  const product_name = req.body.product_name;
  // const product_price = req.body.price;
  let count = 0;
  for (i = 0; i < req.session.cart.length; i++) {
    if (req.session.cart[i].product.id == product.id) {
      req.session.cart[i].quantity += 1;
      count++;
    }
  }
  if (count == 0) {
    const cart_data = {
      product_id: category_id_id,
      product_name: product_name,
      product_price: parseFloat(price),
    };
    req.session.cart.push(cart_data);
  }
  res.redirect("/");
  console.log(req.session.cart);

});

// remove route for Remove from shopping cart
app.post('/remove', (req, res) => {
  const productId = req.body.productId;
  const index = req.session.cart.findIndex(item => item.product_id === productId);
  if (index !== -1) {
    req.session.cart.splice(index, 1);
  }
  res.redirect('/');
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
})
