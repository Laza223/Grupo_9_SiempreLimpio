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
      Product.hasMany[
        models, order, {foreignKeys: "product_id"}
      ]
      Product.belongsTo(models,categoria,{
        foreignKeys:"category_id",
        as: "categorias"
    })
    }
  }
  Product.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    categoria: DataTypes.TEXT,
    stock: DataTypes.INTEGER,
    imagen: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });
  return Product;
};