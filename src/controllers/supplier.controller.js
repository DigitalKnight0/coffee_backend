const {supplierService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllSuppliers = catchAsync(async (req, res) => {
    const suppliers = await supplierService.getAllSuppliers();
    res.send(suppliers);
});

const getSupplierById = catchAsync(async (req, res) => {
    const {supplierId} = req.params;
    const supplier = await supplierService.getSupplierById(supplierId);
    res.send(supplier);
});

module.exports = {
    getAllSuppliers,
    getSupplierById,
};