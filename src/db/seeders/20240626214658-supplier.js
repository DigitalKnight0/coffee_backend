'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('supplier', [
			{
        "name": "Organic Farms Co.",
        "seed_variety_type": "Arabica",
        "certification": "Organic Certified",
        "fertilizer_used": "Nitrogen-Rich",
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "name": "Green Fields Growers",
        "seed_variety_type": "Robusta",
        "certification": "Fair Trade",
        "fertilizer_used": "Phosphorus-Rich",
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "name": "Sustainable Harvesters",
        "seed_variety_type": "Liberica",
        "certification": "Rainforest Alliance",
        "fertilizer_used": "Potassium-Rich",
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "name": "Excelsa Growers",
        "seed_variety_type": "Excelsa",
        "certification": "USDA Organic",
        "fertilizer_used": "Multi-Nutrient Blend",
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "name": "Geisha Farms Ltd.",
        "seed_variety_type": "Geisha",
        "certification": "UTZ Certified",
        "fertilizer_used": "Compost",
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
