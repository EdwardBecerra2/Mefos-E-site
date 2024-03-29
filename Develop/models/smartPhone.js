const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SmartPhone extends Model {}

SmartPhone.init(
  {
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'smartPhone',
  }
);

module.exports = SmartPhone;
