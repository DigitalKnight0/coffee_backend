const db = require('../db/models');

const getAllWarehouses = async () => {
    const warehouses = await db.warehouse.findAll();
    return warehouses;
}

const getWarehouseById = async (warehouseId) => {
    const warehouse = await db.warehouse.findOne({
        where: { id: warehouseId },
    });

    return warehouse;
}

module.exports = {
    getAllWarehouses,
    getWarehouseById,
};