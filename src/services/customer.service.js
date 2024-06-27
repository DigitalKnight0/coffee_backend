const db = require('../db/models');

async function getAllCustomers(){
    const customers = await db.customer.findAll();
    return customers;
}

async function getCustomerById(customerId) {
    const customer = await db.customer.findOne({
        where: { id: customerId },
    });

    return customer;
}

module.exports = {
    getAllCustomers,
    getCustomerById,
};