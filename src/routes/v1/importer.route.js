const express = require('express');
const router = express.Router();

const importerController = require('../../controllers/importer.controller');

router.get('/', importerController.getAllImporters);
router.get('/:importerId', importerController.getImporterById);

module.exports = router;