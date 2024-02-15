const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Computer extends Model {}

Computer.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
    },
  },
}, {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'computer',
});

module.exports = Computer;
