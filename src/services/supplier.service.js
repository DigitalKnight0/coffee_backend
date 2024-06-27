const db = require('../db/models');

async function getAllSuppliers(){
    const suppliers = await db.supplier.findAll();
    return suppliers;
}

async function getSupplierById(supplierId) {
    const supplier = await db.supplier.findOne({
        where: { id: supplierId },
    });

    return supplier;
}

module.exports = {
    getAllSuppliers,
    getSupplierById,
};