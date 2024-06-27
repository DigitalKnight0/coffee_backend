'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('importer', [
			{
        "coffee_quantity": 1800,
        "shipment_id": "SHIP-ITA-2024-211",
        "vehicle_details": "Truck, Plate: MI-17645",
        "importer_id": "IMP-ITA-2024-7433",
        "warehouse_details": "Milan Warehouse, Via Milano 1, Milan, Italy",
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "coffee_quantity": 2500,
        "shipment_id": "SHIP-ITA-2024-982",
        "vehicle_details": "Ship: SS Espresso, Container: ITA789",
        "importer_id": "IMP-ITA-2024-9827",
        "warehouse_details": "Rome Warehouse, Via Roma 10, Rome, Italy",
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "coffee_quantity": 3200,
        "shipment_id": "SHIP-ITA-2024-153",
        "vehicle_details": "Airplane, Flight: ITA123",
        "importer_id": "IMP-ITA-2024-6153",
        "warehouse_details": "Naples Warehouse, Piazza Napoli 5, Naples, Italy",
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "coffee_quantity": 2100,
        "shipment_id": "SHIP-ITA-2024-114",
        "vehicle_details": "Rail, Wagon: ITA326",
        "importer_id": "IMP-ITA-2024-1353",
        "warehouse_details": "Florence Warehouse, Via Firenze 20, Florence, Italy",
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "coffee_quantity": 2800,
        "shipment_id": "SHIP-ITA-2024-095",
        "vehicle_details": "Courier, Company: Express Italia",
        "importer_id": "IMP-ITA-2024-9287",
        "warehouse_details": "Venice Warehouse, Piazza Venezia 15, Venice, Italy",
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
