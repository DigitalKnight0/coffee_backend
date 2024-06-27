const express = require('express');

const router = express.Router();

const logisticsController = require('../../controllers/logistics.controller');

router.get('/', logisticsController.getAllLogistics);
router.get('/:logisticsId', logisticsController.getLogisticsById);

module.exports = router;