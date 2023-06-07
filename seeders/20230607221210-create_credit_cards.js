"use strict";

const { faker } = require("@faker-js/faker");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    const creditCardsData = [];

    // Generate 10 unique credit card records
    for (let i = 0; i < 10; i++) {
      const creditCard = {
        userId: i,
        cardNumber: `${faker.number.int({
          min: 1000000000000000,
          max: 9999999999999999,
        })}`,
        cardHolder: faker.person.fullName(),
        expDate: faker.date.future().toLocaleDateString(),
        billingAddress: faker.location.streetAddress(),
        cvc: `${faker.number.int({ min: 100, max: 999 })}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      creditCardsData.push(creditCard);
    }

    return queryInterface.bulkInsert("credit_cards", creditCardsData);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("credit_cards", null, {});
  },
};
