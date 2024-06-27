'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exporter', [
			{
        "coffee_quantity": 1200,
        "delievery_address": "Via Roma 1, Milan, Italy",
        "exporter_id": "EXP-ITA-2024-9221",
        "shipment_id": "SHIP-ITA-2024-073",
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "coffee_quantity": 2300,
        "delievery_address": "Corso Italia 10, Rome, Italy",
        "exporter_id": "EXP-ITA-2024-7622",
        "shipment_id": "SHIP-ITA-2024-282",
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "coffee_quantity": 1800,
        "delievery_address": "Piazza San Marco 5, Venice, Italy",
        "exporter_id": "EXP-ITA-2024-3823",
        "shipment_id": "SHIP-ITA-2024-153",
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "coffee_quantity": 1500,
        "delievery_address": "Via Garibaldi 20, Florence, Italy",
        "exporter_id": "EXP-ITA-2024-8174",
        "shipment_id": "SHIP-ITA-2024-014",
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "coffee_quantity": 2700,
        "delievery_address": "Viale dei Tigli 15, Naples, Italy",
        "exporter_id": "EXP-ITA-2024-1425",
        "shipment_id": "SHIP-ITA-2024-005",
        "created_date_time": "2024-06-26T14:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
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
