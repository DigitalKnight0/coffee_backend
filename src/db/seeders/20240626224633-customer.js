'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('customer', [
			{
        "coffee_seeds_and_manufacturer": "Arabica, Greenfield Coffee Co.",
        "offers": "Buy 2 Get 1 Free",
        "spent_coffee_grounds": 5,
        "serial_numbers_for_barcode": "987654321012",
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "coffee_seeds_and_manufacturer": "Robusta, Riverstone Coffee",
        "offers": "20% Off for Bulk Orders",
        "spent_coffee_grounds": 3,
        "serial_numbers_for_barcode": "876543210123",
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "coffee_seeds_and_manufacturer": "Geisha, Sunrise Coffee",
        "offers": "Free Shipping on Orders Above $200",
        "spent_coffee_grounds": 7,
        "serial_numbers_for_barcode": "765432101234",
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "coffee_seeds_and_manufacturer": "Liberica, Oakwood Roasters",
        "offers": "Limited Edition Blend Launch",
        "spent_coffee_grounds": 4,
        "serial_numbers_for_barcode": "654321012345",
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      }
		]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
