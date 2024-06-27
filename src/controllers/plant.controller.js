const {plantService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllPlants = catchAsync(async (req, res) => {
    const plants = await plantService.getAllPlants();
    res.send(plants);
})

const getPlantById = catchAsync(async (req, res) => {
    const {plantId} = req.params;
    const plant = await plantService.getPlantById(plantId);
    res.send(plant);
})

module.exports = {
    getAllPlants,
    getPlantById,
};
