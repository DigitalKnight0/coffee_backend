const express = require('express');

const router = express.Router();

const warehouseController = require('../../controllers/warehouse.controller');

router.get('/', warehouseController.getAllWarehouses);
router.get('/:warehouseId', warehouseController.getWarehouseById);

module.exports = router;