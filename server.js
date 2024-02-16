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


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});