const {warehouseService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllWarehouses = catchAsync(async (req, res) => {
    const warehouses = await warehouseService.getAllWarehouses();
    res.send(warehouses);
});

const getWarehouseById = catchAsync(async (req, res) => {
    const {warehouseId} = req.params;
    const warehouse = await warehouseService.getWarehouseById(warehouseId);
    res.send(warehouse);
}
);

module.exports = {
    getAllWarehouses,
    getWarehouseById,
};