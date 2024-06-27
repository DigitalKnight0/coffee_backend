const express = require('express');
const router = express.Router();

const farmerController = require('../../controllers/farmer.controller');

router.get('/', farmerController.getAllFarmers);
router.get('/:farmerId', farmerController.getFarmerById);

module.exports = router;