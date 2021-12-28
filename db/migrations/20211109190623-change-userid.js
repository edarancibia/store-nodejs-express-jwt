'use strict';
const { DataTypes } = require('sequelize');
const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.removeColumn(CUSTOMER_TABLE, 'role');
  }
};
