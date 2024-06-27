'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('logistics', [
      {
        "time_of_departure": "08:30:00",
        "tracking_details": "TRK-2024-ANH001",
        "arrival_time": "12:45:00",
        "lot_number": "LOT-20240625001",
        "date": "2024-06-15",
        "quantity": 1500,
        has_arrived: false,
        "farm_name": "Green Fields Farm",
        "processing_method": "Wet Method",
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "time_of_departure": "10:15:00",
        "tracking_details": "TRK-2024-KYL002",
        "arrival_time": "14:30:00",
        "lot_number": "LOT-20240626002",
        "date": "2024-07-26",
        has_arrived: false,
        "quantity": 2000,
        "farm_name": "Sunny Hill Farm",
        "processing_method": "Dry Method",
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "time_of_departure": "11:45:00",
        "tracking_details": "TRK-2024-OEP003",
        "arrival_time": "16:00:00",
        "lot_number": "LOT-20240627003",
        "date": "2024-09-27",
        has_arrived: true,
        "quantity": 1800,
        "farm_name": "Golden Harvest Farm",
        "processing_method": "Wet Method",
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "time_of_departure": "13:00:00",
        "tracking_details": "TRK-2024-QVS004",
        "arrival_time": "17:15:00",
        "lot_number": "LOT-20240628004",
        "date": "2024-11-28",
        has_arrived: true,
        "quantity": 2200,
        "farm_name": "Riverside Farm",
        "processing_method": "Dry Method",
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "time_of_departure": "14:30:00",
        "tracking_details": "TRK-2024-CSC005",
        "arrival_time": "18:30:00",
        "lot_number": "LOT-20240629005",
        "date": "2024-12-29",
        has_arrived: true,
        "quantity": 1700,
        "farm_name": "Mountain View Farm",
        "processing_method": "Wet Method",
        "created_date_time": "2024-06-26T14:00:00Z",
        "modified_date_time": "2024-06-26T14:00:00Z"
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
