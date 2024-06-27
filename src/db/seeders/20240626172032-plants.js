'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('plant', [
			{
        "name": "Ethiopian Yirgacheffe",
        "roasting_type": "Light Roast",
        "tempature": 400,
        "roasting_time": "00:10:00",
        "air_tempature": 390,
        "bean_tempature": 400,
        "fan_speed": 70,
        "power": 80,
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "name": "Colombian Supremo",
        "roasting_type": "Medium Roast",
        "tempature": 445,
        "roasting_time": "00:12:30",
        "air_tempature": 405,
        "bean_tempature": 415,
        "fan_speed": 75,
        "power": 85,
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "name": "Brazilian Bourbon",
        "roasting_type": "Dark Roast",
        "tempature": 420,
        "roasting_time": "00:15:00",
        "air_tempature": 420,
        "bean_tempature": 433,
        "fan_speed": 80,
        "power": 90,
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "name": "Costa Rican Tarrazú",
        "roasting_type": "Espresso Roast",
        "tempature": 470,
        "roasting_time": "00:18:00",
        "air_tempature": 440,
        "bean_tempature": 457,
        "fan_speed": 85,
        "power": 95,
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "name": "Kenyan AA",
        "roasting_type": "French Roast",
        "tempature": 465,
        "roasting_time": "00:20:30",
        "air_tempature": 455,
        "bean_tempature": 444,
        "fan_speed": 90,
        "power": 100,
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
