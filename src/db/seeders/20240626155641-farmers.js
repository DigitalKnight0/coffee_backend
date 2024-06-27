'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('farmer', [
			{
        "name": "John Doe",
        "registration_number": "REG-2024-F001",
        "farm_temperature": 75,
        "farm_humidity": 60,
        "coffee_activity": "Planting",
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "name": "Jane Smith",
        "registration_number": "REG-2024-B042",
        "farm_temperature": 82,
        "farm_humidity": 65,
        "coffee_activity": "Harvesting",
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "name": "Carlos Gomez",
        "registration_number": "REG-2024-L103",
        "farm_temperature": 78,
        "farm_humidity": 70,
        "coffee_activity": "Pruning",
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "name": "Maria Garcia",
        "registration_number": "REG-2024-D224",
        "farm_temperature": 80,
        "farm_humidity": 55,
        "coffee_activity": "Fertilizing",
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "name": "Ahmed Khan",
        "registration_number": "REG-2024-X035",
        "farm_temperature": 85,
        "farm_humidity": 50,
        "coffee_activity": "Drying",
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
