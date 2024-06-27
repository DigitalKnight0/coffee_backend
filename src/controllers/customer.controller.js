const {customerService} = require('../services');

const catchAsync = require('../utils/catchAsync');

const getAllCustomers = catchAsync(async (req, res) => {
    const customers = await customerService.getAllCustomers();
    res.send(customers);
});

const getCustomerById = catchAsync(async (req, res) => {
    const {customerId} = req.params;
    const customer = await customerService.getCustomerById(customerId);
    res.send(customer);
})

module.exports = {
    getAllCustomers,
    getCustomerById,
};