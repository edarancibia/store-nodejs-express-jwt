'use strict';
const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
   await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
