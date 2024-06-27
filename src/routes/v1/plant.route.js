const express = require('express');
const router = express.Router();

const plantController = require('../../controllers/plant.controller');

router.get('/', plantController.getAllPlants);
router.get('/:plantId', plantController.getPlantById);

module.exports = router;