const {logisticsService} = require('../services');

const catchAsync = require('../utils/catchAsync');

const getAllLogistics = catchAsync(async (req, res) => {
    const logistics = await logisticsService.getAllLogistics();
    res.send(logistics);
});

const getLogisticsById = catchAsync(async (req, res) => {
    const {logisticsId} = req.params;
    const logistics = await logisticsService.getLogisticsById(logisticsId);
    res.send(logistics);
});

module.exports = {
    getAllLogistics,
    getLogisticsById,
};
