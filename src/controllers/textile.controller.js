const {textileService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const getAllTextiles = catchAsync(async (req, res) => {
    const textiles = await textileService.getAllTextiles();
    res.send(textiles);
}
);

const getTextileById = catchAsync(async (req, res) => {
        
            const {textileId} = req.params;
            const textile = await textileService.getTextileById(textileId);
            res.send(textile);
        }
);

module.exports = {
    getAllTextiles,
    getTextileById,
};