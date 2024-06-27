module.exports = {
	up: (queryInterface /* , Sequelize */) => {
		return queryInterface.bulkInsert('role', [
			{
				id: 1,
				name: 'farmer',
				description: 'some description',
				created_date_time: new Date(),
				modified_date_time: new Date(),
			},
			{
				id: 2,
				name: 'customer',
				description: 'some description',
				created_date_time: new Date(),
				modified_date_time: new Date(),
			},
			{
				id: 3,
				name: 'supplier',
				description: 'some description',
				created_date_time: new Date(),
				modified_date_time: new Date(),
			},
		]);
	},
	down: (queryInterface /* , Sequelize */) => {
		return queryInterface.bulkDelete('role', null, {});
	},
};
