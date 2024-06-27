'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('textile', [
      {
        "type_of_plastic": "PET",
        "recycled_plastic_quantity": 10,
        "spent_coffee_grounds_quantity": 12,
        "collection_point": "Via dei Mille 10, Milan, Italy",
        "recycled_cotton_quantity": 80,
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "type_of_plastic": "HDPE",
        "recycled_plastic_quantity": 45,
        "spent_coffee_grounds_quantity": 7,
        "collection_point": "Via Appia 25, Rome, Italy",
        "recycled_cotton_quantity": 75,
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "type_of_plastic": "PVC",
        "recycled_plastic_quantity": 27,
        "spent_coffee_grounds_quantity": 10,
        "collection_point": "Via Firenze 15, Florence, Italy",
        "recycled_cotton_quantity": 60,
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "type_of_plastic": "LDPE",
        "recycled_plastic_quantity": 70,
        "spent_coffee_grounds_quantity": 15,
        "collection_point": "Calle Venezia 5, Venice, Italy",
        "recycled_cotton_quantity": 70,
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "type_of_plastic": "PP",
        "recycled_plastic_quantity": 86,
        "spent_coffee_grounds_quantity": 25,
        "collection_point": "Via Napoli 20, Naples, Italy",
        "recycled_cotton_quantity": 68,
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
