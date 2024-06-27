const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const roleRoute = require('./role.route');
const docsRoute = require('./docs.route');
const farmersRoute = require('./farmer.route');
const plantsRoute = require('./plant.route');
const exporterRoute = require('./exporter.route');
const importerRoute = require('./importer.route');
const logisticsRoute = require('./logistics.route');
const warehouseRoute = require('./warehouse.route');
const supplierRoute = require('./supplier.route');
const textileRoute = require('./textile.route');
const customerRoute = require('./customer.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/roles', roleRoute);
router.use('/docs', docsRoute);
router.use('/farmers', farmersRoute);
router.use('/plants', plantsRoute);
router.use('/exports', exporterRoute);
router.use('/imports', importerRoute);
router.use('/logistics', logisticsRoute);
router.use('/warehouses', warehouseRoute);
router.use('/suppliers', supplierRoute);
router.use('/textiles', textileRoute);
router.use('/customers', customerRoute);

module.exports = router;
