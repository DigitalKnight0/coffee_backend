'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('warehouse', [
			{
        "package_details": "1 kg Compostable Bags",
        "dispatch_id": "DISP-2024-101274",
        "transport_method": "Truck",
        "bill_to": "Greenfield Coffee Co.",
        "ship_to": "Sunrise Warehouse",
        "payment_method": "Bank Transfer",
        "bank_name": "Evergreen Bank",
        "account_number": "123-456-7890",
        "total_amount": 10000,
        "created_date_time": "2024-06-26T10:00:00Z",
        "modified_date_time": "2024-06-26T10:00:00Z"
      },
      {
        "package_details": "500 g Biodegradable Vacuum Packs",
        "dispatch_id": "DISP-2024-112868",
        "transport_method": "Air Freight",
        "bill_to": "Mountain Top Traders",
        "ship_to": "Coastal Coffee Traders",
        "payment_method": "Credit Card",
        "bank_name": "Riverstone Bank",
        "account_number": "987-654-3215",
        "total_amount": 5000,
        "created_date_time": "2024-06-26T11:00:00Z",
        "modified_date_time": "2024-06-26T11:00:00Z"
      },
      {
        "package_details": "250 g Recyclable Tin Cans",
        "dispatch_id": "DISP-2024-123116",
        "transport_method": "Sea Freight",
        "bill_to": "Valley Coffee Importers",
        "ship_to": "Highland Coffee Warehouse",
        "payment_method": "PayPal",
        "bank_name": "Oakwood Bank",
        "account_number": "456-123-7897",
        "total_amount": 7500,
        "created_date_time": "2024-06-26T12:00:00Z",
        "modified_date_time": "2024-06-26T12:00:00Z"
      },
      {
        "package_details": "Bulk 50 kg Reusable Sacks",
        "dispatch_id": "DISP-2024-198464",
        "transport_method": "Rail",
        "bill_to": "Lakeside Coffee Exporters",
        "ship_to": "Ridgefield Coffee Facility",
        "payment_method": "Cash on Delivery",
        "bank_name": "Pinehill Bank",
        "account_number": "321-654-9879",
        "total_amount": 20000,
        "created_date_time": "2024-06-26T13:00:00Z",
        "modified_date_time": "2024-06-26T13:00:00Z"
      },
      {
        "package_details": "2 kg Jute Bags",
        "dispatch_id": "DISP-2024-100100",
        "transport_method": "Courier Service",
        "bill_to": "Redwood Coffee Co.",
        "ship_to": "Meadow Distribution",
        "payment_method": "Bank Transfer",
        "bank_name": "Mapleleaf Bank",
        "account_number": "654-987-3210",
        "total_amount": 12000,
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
