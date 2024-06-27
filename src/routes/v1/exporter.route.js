const express = require('express');
const router = express.Router();

const exporterController = require('../../controllers/exporter.controller');

router.get('/', exporterController.getAllExporters);
router.get('/:exporterId', exporterController.getExporterById);

module.exports = router;