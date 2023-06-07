"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CreditCard.init(
    {
      userId: DataTypes.INTEGER,
      cardNumber: DataTypes.STRING,
      cardHolder: DataTypes.STRING,
      expDate: DataTypes.STRING,
      billingAddress: DataTypes.STRING,
      cvc: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CreditCard",
      tableName: "credit_cards",
    }
  );
  return CreditCard;
};
