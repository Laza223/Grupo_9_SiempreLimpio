'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(
        models.Order, {
        as: "orders",
        foreignKeys: "product_id"
      }
      )
      Product.belongsTo(models.Category, {
        foreignKeys: "categoryid",
        as: "category"
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  return Product;
};