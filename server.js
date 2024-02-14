// This is your test secret API key.
require('dotenv').config();
const stripe = require('stripe')('sk_test_51Oggj7Gh3q0yh3BLowB8cJAqHl3lJWFx5DiwR56OZUwZTe3m0zdvsQD25Fpq1K50KaP0y4eghb9EVttCyVnjDSqm00UuZEv0K3');
const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./Develop/config/connection');

const app = express();

// Import routes
const authRoutes = require('./Develop/controllers/api/authRoutes'); 
const homeRoute = require('./Develop/controllers/homeroute');

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

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));