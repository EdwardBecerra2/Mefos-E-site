const sequelize = require('../config/connection');
const seedCategories = require('./category');
const seedTags = require('./tag');
const seedComputers = require('./computer');
const seedLaptops = require('./laptop');
const seedSmartPhones = require('./smartPhone');
const seedSmartWatch = require('./smartWatch');
const seedProductTags = require('./productTag');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  

  await seedComputers();
  console.log('\n----- COMPUTERS SEEDED -----\n');

  await seedLaptops();
   console.log('\n----- LAPTOPS SEEDED -----\n');

  await seedSmartPhones();
   console.log('\n----- SMARTPHONES SEEDED -----\n');

  await seedSmartWatch();
   console.log('\n----- SMARTHWATCH SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};
seedAll();