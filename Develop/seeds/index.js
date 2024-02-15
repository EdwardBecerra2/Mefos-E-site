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

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedComputers();
  console.log('\n----- COMPUTERS SEEDED -----\n');

  await seedLaptops();

  await seedSmartPhones();

  await seedSmartWatch();

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};
seedAll();