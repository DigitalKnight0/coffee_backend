const express = require('express');
const router = express.Router();

const supplierController = require('../../controllers/supplier.controller');

router.get('/', supplierController.getAllSuppliers);
router.get('/:supplierId', supplierController.getSupplierById);

module.exports = router;
