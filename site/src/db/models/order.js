'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Order.init({
    user_Id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    status_id: DataTypes.INTEGER,
    shipping_address: DataTypes.STRING,
    payment_method: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    paranoid: true
  });
  return Order;
};