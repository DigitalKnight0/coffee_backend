const { farmerService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllFarmers = catchAsync(async (req, res) => {
    const farmers = await farmerService.getAllFarmers();
    res.send(farmers);
});

const getFarmerById = catchAsync(async (req, res) => {
    const { farmerId } = req.params;
    const farmer = await farmerService.getFarmerById(farmerId);
    res.send(farmer);
}
);

module.exports = {
    getAllFarmers,
    getFarmerById,
};
